"use server";

import React, { FC } from "react";
import Categories from "@/components/home-page/categories";
import SignInGoogleButton from "@/components/shared/signIn-google-button";
import MainBanner from "@/components/home-page/main-banner/main-banner";

const HomePage: FC = async () => {
  return (
    <>
      <MainBanner />
      <Categories />
      <SignInGoogleButton />
    </>
  );
};

export default HomePage;
