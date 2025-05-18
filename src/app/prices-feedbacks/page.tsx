import React, { FC } from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import Cars from "@/components/home-page/cars";
import Feedbacks from "@/components/home-page/feedbacks";

const PricesFeedbacksPage: FC = () => {
  return (
    <>
      <Breadcrumbs
        links={[
          { name: "Головна", href: "/" },
          { name: "Ціни та відгуки", href: "/prices-feedbacks" },
        ]}
      />
      <Cars />
      <Feedbacks />
    </>
  );
};

export default PricesFeedbacksPage;
