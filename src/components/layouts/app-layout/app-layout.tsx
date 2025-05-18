import { UserProvider } from "@/components/contexts/user-context";
import React, { FC, PropsWithChildren } from "react";
// import AppHeader from "./app-header";
// import AppFooter from "./app-footer";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    // <UserProvider>
    <div className="min-h-[100vh] py-[2vh] container mx-auto flex flex-col">
      {/* <AppHeader /> */}
      {children}
      {/* <AppFooter /> */}
    </div>
    // </UserProvider>
  );
};

export default AppLayout;
