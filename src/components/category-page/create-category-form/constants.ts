import { centerCrop, makeAspectCrop, PixelCrop } from "react-image-crop";
import * as Yup from "yup";

export const DEFAULT_FORM_DATA = {
  name: "",
  image: "",
};

export const SCALE = 1;

export const ROTATE = 0;

export const ASCPECT = 1 / 1;

export const MIN_SIZE_PX = 150;

export const COMPRESS_OPTIONS = {
  // maxSizeMB: 0.35,
  // maxWidthOrHeight: 200,
  // useWebWorker: true,
  maxSizeMB: 1,
  maxWidthOrHeight: 600,
  useWebWorker: true,
  fileType: "image/webp",
};

export const centerAspectCrop = (
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
};

export const canvasPreview = (image?: HTMLImageElement, crop?: PixelCrop) =>
  new Promise((resolve, reject) => {
    if (!!crop && !!image) {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width * scaleX;
      canvas.height = crop.height * scaleY;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("No 2d context");
      }

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      );

      try {
        const dataUrl = canvas.toDataURL("image/webp");
        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }

      // canvas.toBlob((file) => {
      //   if (!file) {
      //     return reject();
      //   }

      //   const objUrl = window.URL.createObjectURL(file);

      //   resolve(objUrl);
      // });
    }
  });

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Назва обов'язкове поле"),
  image: Yup.string().required("Зображення обов'язкове"),
});
