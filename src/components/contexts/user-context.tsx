"use client";

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, UserInfo } from "firebase/auth";
// import { auth } from "firebaseConfig";
// import { getDbUserByEmail } from "@/lib/db";
import { useRouter } from "next/navigation";
import { User, UserRole } from "@/types/user";
import { auth } from "@/firebaseConfig";
import { signOutGoogle } from "@/lib/auth";

interface UserContextProps {
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  logOut: Function;
  synchUserByEmail: (email: string) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const isStorageLoggedIn = localStorage.getItem("isLoggedIn");

  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!isStorageLoggedIn || false);

  const router = useRouter();

  const isAdmin = user?.roles.includes(UserRole.admin) ?? false;

  const synchUserByEmail = async (email: string, omitMessage?: boolean) => {
    const dbUser = await fetch("/api/user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    // const dbUser = await getDbUserByEmail(email);

    // if (!!dbUser) {
    //   setUser({
    //     ...dbUser,
    //   });
    //   window.localStorage.setItem("isLoggedIn", "1");
    //   setIsLoggedIn(true);

    //   if (!omitMessage) {
    //     router.push("/academy");
    //     // toast.success("Ви успішно увійшли до системи!");
    //   }
    // } else {
    //   setUser(null);
    //   setIsLoggedIn(false);

    //   window.localStorage.removeItem("isLoggedIn");

    //   // !omitMessage &&
    //   //   toast.warning("У вас немає доступу. Зв'яжіться з адміністратором.");
    // }
  };

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    signOutGoogle();
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (resUser) => {
      resUser?.email && synchUserByEmail(resUser.email, true);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, isAdmin, logOut, synchUserByEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};
