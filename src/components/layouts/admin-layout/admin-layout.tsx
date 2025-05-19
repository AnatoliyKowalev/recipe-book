import React, { ReactNode } from "react";
import { auth } from "@/auth";
import MenuLogin from "@/components/shared/menu-login";
import { checkUserExist } from "@/lib/actions/users";
import Link from "next/link";
import LogOutButton from "@/components/shared/logout-button";

async function checkUser() {
  const res = await auth();
  const email = res?.user?.email;
  const ok = email && (await checkUserExist(email));

  return ok;
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isUserExist = await checkUser();

  if (!isUserExist) {
    return (
      <div className="flex gap-4">
        <Link href="/">Назад</Link>
        <LogOutButton />
      </div>
    );
  }

  return (
    <>
      <MenuLogin />
      {children}
    </>
  );
}

// export default AdminLayout;
