"use client";

import React, { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TypeCategory } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";

const CategoriesPage: FC = () => {
  const [categories, setCategories] = useState<TypeCategory[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("/api/categories");
      const data = await res.json();

      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-2">
        <h1 className="font-bold">Усі категорії</h1>
        <Button asChild>
          <Link href="/category">Створити</Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-12 gap-4">
        {categories.map((category) => (
          <Link
            href={`/category/${category.id}`}
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
    </div>
  );
};

export default CategoriesPage;
