import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "@/firebaseConfig";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const signOutGoogle = async () => {
  return auth.signOut();
};
