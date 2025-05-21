import React, { FC } from "react";
import { CategoriesProps } from "./interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Categories: FC<CategoriesProps> = ({ categories, className }) => {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-12 gap-4", className)}>
      {categories.map(({ sys, fields }) => (
        <Link
          href={`/category/${sys.id}`}
          className="col-span-1 md:col-span-2 flex flex-col items-center gap-2 bg-card-foreground pb-1 rounded overflow-hidden cursor-pointer group"
          key={sys.id}
        >
          <div className="bg-[#d4c28b] bg-cover bg-center w-full">
            <Image
              src={`https:${fields.image.fields.file.url}`}
              className="w-full transition group-hover:scale-102 group-hover:rotate-1"
              width={200}
              height={200}
              alt={fields.image.fields.title}
            />
          </div>
          <div className="text-lg">{fields.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
