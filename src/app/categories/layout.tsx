import React, { FC, PropsWithChildren } from "react";
import AdminLayout from "@/components/layouts/admin-layout";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
