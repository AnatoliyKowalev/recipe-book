import React from "react";
import { getRecipeById } from "@/lib/actions/recipes";
import PageHeader from "@/components/shared/page-header";
import PreviewBanner from "@/components/recipe-page/preview-banner";
import RteBlock from "@/components/shared/rte-block";
import IngredientsPopover from "@/components/shared/ingredients-popover";

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
        <div className="mt-4 relative flex items-center stiky top-0 bg-card py-2">
          <div className="text-xl font-bold">Інгредієнти:</div>
          <IngredientsPopover
            ingredients={recipe.fields.ingredients}
            className="right-0 top-[auto] bottom-[auto]"
          />
        </div>
        <RteBlock content={recipe.fields.ingredients} />
        <RteBlock content={recipe.fields.script} />
      </div>
    </>
  );
}
