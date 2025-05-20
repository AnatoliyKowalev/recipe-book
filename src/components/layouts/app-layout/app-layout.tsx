import React, { FC, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[100vh] py-[2vh] container mx-auto flex flex-col pb-[10vh] relative my-auto">
      {children}
    </div>
  );
};

export default AppLayout;
