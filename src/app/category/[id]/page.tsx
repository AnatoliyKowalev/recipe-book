import React from "react";

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  // const data = await fetch(`${process.env.SITE_URL}/api/category?id=${id}`);
  const category = null;

  if (!category) return <div>Категорія не знайдена!</div>;

  return <></>;
}
