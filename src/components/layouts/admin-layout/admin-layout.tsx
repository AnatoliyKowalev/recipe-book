import MenuLogin from "@/components/shared/menu-login";
import React, { FC, PropsWithChildren } from "react";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MenuLogin />
      {children}
    </>
  );
};

export default AdminLayout;
