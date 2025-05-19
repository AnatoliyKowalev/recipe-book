"use client";

import React, {
  ChangeEventHandler,
  FC,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateCategoryFormData, CreateCategoryFormProps } from "./interfaces";
import {
  ASCPECT,
  canvasPreview,
  centerAspectCrop,
  COMPRESS_OPTIONS,
  DEFAULT_FORM_DATA,
  MIN_SIZE_PX,
  validationSchema,
} from "./constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import imageCompression from "browser-image-compression";
import { Trash } from "lucide-react";
import "react-image-crop/dist/ReactCrop.css";
import { useRouter } from "next/navigation";
import Loader from "@/components/shared/loader";
import { auth } from "@/firebaseConfig";

const CreateCategoryForm: FC<CreateCategoryFormProps> = ({ defaultData }) => {
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const imgRef = useRef<HTMLImageElement>(null);

  const isEditMode = !!defaultData;

  const form = useForm<CreateCategoryFormData>({
    defaultValues: defaultData ?? DEFAULT_FORM_DATA,
    resolver: yupResolver(validationSchema),
    mode: "all",
  });
  const { watch, setValue } = form;
  const values = watch();

  const handleSelectFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (!!e.target?.files?.[0]) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setValue("image", reader.result?.toString() || "", {
          shouldValidate: true,
        });
      });

      await imageCompression(e.target.files[0], COMPRESS_OPTIONS).then(
        (res) => {
          reader.readAsDataURL(res);
        }
      );
    }
  };

  const onImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, ASCPECT));
  };

  const onSubmit = async (values: CreateCategoryFormData) => {
    setIsLoading(true);

    const createCategoryData = async () => {
      const preview = await canvasPreview(
        imgRef.current as HTMLImageElement,
        completedCrop
      );

      return {
        ...values,
        image: preview,
      };
    };

    const reqData = isEditMode ? values : createCategoryData();

    const res = await fetch("/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqData),
    });

    if (res.ok) {
      router.push("/categories");
    }
  };

  const deleteCategory = async () => {
    if (defaultData?.id) {
      setIsLoading(true);

      const res = await fetch(`/api/category?id=${defaultData?.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.push("/categories");
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              name="name"
              render={({ field }) => (
                <FormControl>
                  <Input {...field} id="name" placeholder="Назва категорії" />
                </FormControl>
              )}
            />
            <div className="flex items-center justify-between">
              Зображення категорії
              {!!values.image ? (
                <Button
                  onClick={() => setValue("image", "")}
                  type="button"
                  variant="outline"
                >
                  <Trash /> Видалити
                </Button>
              ) : null}
            </div>
            {!!values.image ? (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => {
                  setCompletedCrop(c);
                }}
                className="w-fit mx-auto"
                aspect={ASCPECT}
                minHeight={MIN_SIZE_PX}
                minWidth={MIN_SIZE_PX}
                disabled={isEditMode}
                ruleOfThirds
                keepSelection
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={values.image}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            ) : (
              <input
                onChange={handleSelectFile}
                type="file"
                accept="image/*"
                className="border-1 rounded py-2 p-4 w-fit"
              />
            )}
            <div className="w-fit mx-auto flex flex-items gap-4">
              <Button
                type="submit"
                className="w-fit mx-auto"
                size="lg"
                disabled={!form.formState.isValid}
              >
                {isEditMode ? "Змінити" : "Створити"}
              </Button>
              {isEditMode ? (
                <Button
                  onClick={deleteCategory}
                  type="button"
                  variant="destructive"
                >
                  Видалити
                </Button>
              ) : null}
            </div>
          </form>
        </Form>
      )}
    </>
  );
};

export default CreateCategoryForm;
