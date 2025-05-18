import React, { FC } from "react";
import Brands from "@/components/brands-page/brands";
import Breadcrumbs from "@/components/shared/breadcrumbs";

const BrandsPage: FC = () => {
  return (
    <>
      <Breadcrumbs
        links={[
          { name: "Головна", href: "/" },
          { name: "Advisor Family Card", href: "/brands" },
        ]}
      />
      <Brands />
    </>
  );
};

export default BrandsPage;
