// import { toast } from "react-toastify";
import { v4 } from "uuid";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { db, storage } from "@/firebaseConfig";

// import { FirebaseFile } from "types/files";
import { User, UserRole } from "@/types/user";
import {
  StorageReference,
  deleteObject,
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
} from "firebase/storage";

export const getDbUsers = async () => {
  try {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    const usersRes = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return usersRes as User[];
  } catch (error) {
    return [];
  }
};

export const getDbUserByEmail = async (emailToCheck: string) => {
  try {
    if (!emailToCheck) {
      return null;
    }

    const usersRef = collection(db, "users");

    const q = query(usersRef, where("email", "==", emailToCheck));

    const querySnapshot = await getDocs(q);

    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });

    return user as unknown as User;
  } catch (error) {
    return null;
  }
};
