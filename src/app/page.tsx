"use server";

import React, { FC } from "react";
import Categories from "@/components/home-page/categories";
import MainBanner from "@/components/home-page/main-banner/main-banner";
import { getCategories } from "@/lib/actions/categories";

const HomePage: FC = async () => {
  const categories = await getCategories();

  return (
    <>
      <MainBanner />
      <h2 className="text-xl mt-6 mb-2">Категорії</h2>
      <Categories categories={categories} />
    </>
  );
};

export default HomePage;
