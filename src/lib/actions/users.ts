"use server";

import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const checkUserExist = async (email: string) => {
  try {
    const usersRef = collection(db, "users");
    const q = await query(usersRef, where("email", "==", email));
    const snapshot = await getDocs(q);

    return !snapshot.empty;
  } catch {
    return false;
  }
};
