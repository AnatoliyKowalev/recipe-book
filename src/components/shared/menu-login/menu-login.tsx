import React, { FC, lazy } from "react";
import { useUser } from "@/components/contexts/user-context";
import Link from "next/link";

const LogOutButton = lazy(() => import("@/components/shared/logout-button"));
const SignInGoogleButton = lazy(
  () => import("@/components/shared/signIn-google-button")
);

const MenuLogin: FC = () => {
  const { isLoggedIn } = useUser();

  return (
    <div className="menu-login">
      {isLoggedIn ? (
        <>
          <Link href="/academy">Для вчителів</Link>
          <LogOutButton />
        </>
      ) : (
        <SignInGoogleButton />
      )}
    </div>
  );
};

export default MenuLogin;
