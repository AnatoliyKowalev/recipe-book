import React from "react";
import { getRecipeById } from "@/lib/actions/recipes";
import PageHeader from "@/components/shared/page-header";
import PreviewBanner from "@/components/recipe-page/preview-banner";
import RteBlock from "@/components/shared/rte-block";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipeById(id);

  if (!recipe) {
    return <div className="mx-auto text-xl">Рецепт не знайдено!</div>;
  }

  return (
    <>
      <PageHeader title="Рецепт" />
      <div className="flex flex-col gap-2 pb-[10vh]">
        <PreviewBanner recipe={recipe} />
        <div className="text-xl font-bold mt-6">Інгредієнти:</div>
        <RteBlock content={recipe.fields.ingredients} />
        <RteBlock content={recipe.fields.script} />
      </div>
    </>
  );
}
