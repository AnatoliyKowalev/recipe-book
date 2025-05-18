import { brands } from "@/lib/brands";
import React, { FC } from "react";
import BrandCard from "./brand-card";

const Brands: FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-20">
      {brands.map((brand) => (
        <BrandCard {...brand} key={brand.name} />
      ))}
    </div>
  );
};

export default Brands;
