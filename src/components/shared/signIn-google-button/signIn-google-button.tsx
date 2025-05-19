//   const { synchUserByEmail } = useContext(UserContext);

//   const handleLogin = async () => {
//     const userLoginData = await signInWithGoogle();

//     if (userLoginData) {
//       synchUserByEmail(userLoginData.user.email);
//     }
//   };

"use client";

import React, { FC } from "react";
import { login } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const SignInGoogleButton: FC = () => {
  return (
    <Button onClick={login}>
      <LogIn />
      Увійти
    </Button>
  );
};

export default SignInGoogleButton;
