"use client";

import { TypeCategory } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { CategoriesProps } from "./interfaces";
import { cn } from "@/lib/utils";

const Categories: FC<CategoriesProps> = ({ categories, className }) => {
  // const [categories, setCategories] = useState<TypeCategory[]>([]);
  console.log(categories);
  // useEffect(() => {
  //   async function fetchCategories() {
  //     const res = await fetch("/api/categories");
  //     const data = await res.json();

  //     data.length && setCategories(data);
  //   }

  //   fetchCategories();
  // }, []);

  return (
    <div className={cn("grid md:grid-cols-12 gap-4", className)}>
      {categories.map(({ sys, fields }) => (
        <Link
          href={`/book/${sys.id}`}
          className="md:col-span-2 flex flex-col items-center gap-2 bg-[#f5f0da] pb-1 rounded overflow-hidden cursor-pointer group"
          key={sys.id}
        >
          <Image
            src={`https:${fields.image.fields.file.url}`}
            className="w-full transition group-hover:scale-102 group-hover:rotate-2"
            width={200}
            height={200}
            alt={fields.image.fields.title}
          />
          {fields.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
