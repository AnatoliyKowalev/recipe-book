import React, { FC, PropsWithChildren } from "react";
import CategoryLayout from "@/components/layouts/category-layout";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <CategoryLayout>{children}</CategoryLayout>;
};

export default Layout;
