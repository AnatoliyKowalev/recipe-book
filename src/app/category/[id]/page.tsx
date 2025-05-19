import React from "react";
import CreateCategoryForm from "@/components/category-page/create-category-form";

export default async function CategoryPageEdit({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const data = await fetch(`${process.env.SITE_URL}/api/category?id=${id}`);
  const category = await data.json();

  if (!category) return <div>Категорія не знайдена!</div>;

  return (
    <>
      <CreateCategoryForm defaultData={{ ...category, id }} />
    </>
  );
}
