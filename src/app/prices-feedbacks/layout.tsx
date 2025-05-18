import PageLayout from "@/components/layouts/page-layout";
import React, { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <PageLayout>{children}</PageLayout>;
};

export default Layout;
