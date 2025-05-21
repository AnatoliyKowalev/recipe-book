import React, { FC } from "react";
import { RecipesProps } from "./interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import IngredientsPopover from "@/components/shared/ingredients-popover";
import { Button } from "@/components/ui/button";

const Recipes: FC<RecipesProps> = ({ recipes, className }) => {
  return (
    <div className={cn("grid md:grid-cols-12 gap-4", className)}>
      {recipes.map(({ sys, fields }) => (
        <div
          className="md:col-span-6 flex flex-col items-center gap-2 bg-card-foreground pb-1 rounded overflow-hidden group relative pb-4"
          key={sys.id}
        >
          <Image
            src={`https:${fields.image.fields.file.url}`}
            className="w-full transition group-hover:scale-102 group-hover:rotate-1 h-[230px] lg:h-[290px] object-cover"
            width={600}
            height={400}
            alt={fields.image.fields.title}
          />
          <div className="flex flex-col gap-2 w-full px-4">
            {fields.name}
            <Button className="w-full" asChild>
              <Link href={`/recipe/${sys.id}`}>Перейти</Link>
            </Button>
          </div>
          <IngredientsPopover
            ingredients={fields.ingredients}
            className="border-white text-white"
          />
        </div>
      ))}
    </div>
  );
};

export default Recipes;
