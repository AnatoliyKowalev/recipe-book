"use client";

import { TypeCategory } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { CategoriesProps } from "./interfaces";
import { cn } from "@/lib/utils";

const Categories: FC<CategoriesProps> = ({ redirectPrefix, className }) => {
  const [categories, setCategories] = useState<TypeCategory[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("/api/categories");
      const data = await res.json();

      data.length && setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div className={cn("grid md:grid-cols-12 gap-4", className)}>
      {categories.map((category) => (
        <Link
          href={`/${redirectPrefix}/${category.id}`}
          className="md:col-span-2 flex flex-col items-center gap-2 bg-[#f5f0da] pb-1 rounded overflow-hidden cursor-pointer"
          key={category.id}
        >
          <Image
            src={category.image}
            className="w-full"
            width={100}
            height={100}
            alt={category.name}
          />
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
