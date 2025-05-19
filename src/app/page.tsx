"use server";

import React, { FC } from "react";
import Categories from "@/components/shared/categories";
import SignInGoogleButton from "@/components/shared/signIn-google-button";
import MainBanner from "@/components/home-page/main-banner/main-banner";

const HomePage: FC = async () => {
  return (
    <>
      <MainBanner />
      <h2 className="text-xl mt-6 mb-2">Категорії</h2>
      <Categories redirectPrefix="tolik" />
    </>
  );
};

export default HomePage;
