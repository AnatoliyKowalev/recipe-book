"use client";

import React, { FC } from "react";
import { logout } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const LogOutButton: FC = () => {
  return (
    <Button onClick={() => logout()} variant="destructive">
      <LogOut /> Вийти
    </Button>
  );
};

export default LogOutButton;
