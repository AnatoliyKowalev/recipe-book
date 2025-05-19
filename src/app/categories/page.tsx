import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Categories from "@/components/shared/categories";

const CategoriesPage: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-2">
        <h1 className="font-bold">Усі категорії</h1>
        <Button asChild>
          <Link href="/category">Створити</Link>
        </Button>
      </div>
      <Categories redirectPrefix="category" />
    </div>
  );
};

export default CategoriesPage;
