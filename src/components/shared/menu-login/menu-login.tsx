"use server";

import React, { FC, lazy } from "react";
import { auth } from "@/auth";

const LogOutButton = lazy(() => import("@/components/shared/logout-button"));
const SignInGoogleButton = lazy(
  () => import("@/components/shared/signIn-google-button")
);

const MenuLogin: FC = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-between py-2 mb-4">
      <div>
        Привіт <b>{session?.user?.email}</b>!
      </div>
      {!!session?.user ? <LogOutButton /> : <SignInGoogleButton />}
    </div>
  );
};

export default MenuLogin;
