import React from "react";
import { getRecipesByCategoryId } from "@/lib/actions/recipes";
import Image from "next/image";
import Recipes from "@/components/category-page/recipes";
import PageHeader from "@/components/shared/page-header";

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const recipes = await getRecipesByCategoryId(id);

  console.log(recipes);

  if (!recipes?.length)
    return <div className="mx-auto text-xl">Рецептів не знайдено!</div>;

  return (
    <>
      <PageHeader title="Рецепти" backLink="/" />
      <div className="flex flex-col gap-2">
        <Recipes recipes={recipes} />
      </div>
    </>
  );
}
