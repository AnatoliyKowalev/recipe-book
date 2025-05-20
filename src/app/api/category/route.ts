// import { db } from "@/firebaseConfig";
// import { base64ToFile } from "@/lib/utils";
// import { uploadRouter, uploadthing, utapi } from "@/uploadthingConfig";
// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   getDocs,
//   query,
//   setDoc,
//   where,
// } from "firebase/firestore";
// import { NextApiRequest } from "next";
// import { PixelCrop } from "react-image-crop";
// import { v4 } from "uuid";

// export const dynamic = "force-dynamic";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// async function uploadServerSideFile(file: File) {
//   try {
//     const response = await utapi.uploadFiles(file);

//     return response.data;
//   } catch (error) {
//     console.error("Upload failed:", error);
//     throw error;
//   }
// }

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { name, image, id } = body;

//   if (image.includes("https")) {
//     const categoryRef = doc(db, "categories", id);

//     return await setDoc(categoryRef, {
//       name,
//       image,
//     })
//       .then(() => {
//         return new Response("", { status: 200 });
//       })
//       .catch(() => {
//         throw new Error("Cannot create category");
//       });
//   } else {
//     if (!name || !image) {
//       throw new Error("Category name and image are required!");
//     }

//     try {
//       const file = base64ToFile(image, `${v4()}-${name}.webp`);

//       return (
//         file &&
//         (await uploadServerSideFile(file)
//           .then(async (res) => {
//             if (res) {
//               const img = res.ufsUrl;

//               const categoryRef = doc(db, "categories", v4());

//               const newData = {
//                 name,
//                 image: img,
//               };

//               return await setDoc(categoryRef, newData)
//                 .then(() => {
//                   return new Response("", { status: 200 });
//                 })
//                 .catch(() => {
//                   throw new Error("Cannot create category");
//                 });
//             } else {
//               throw new Error("Cannot upload image");
//             }
//           })
//           .catch(() => {
//             throw new Error("Cannot upload image");
//           }))
//       );
//     } catch {
//       return new Response(
//         JSON.stringify({ error: "Failed to create category" }),
//         {
//           status: 500,
//         }
//       );
//     }
//   }
// }

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   try {
//     if (!id) {
//       throw new Error("Cannot get category info");
//     }

//     const docRef = doc(db, "categories", id);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       const category = docSnap.data();

//       return new Response(JSON.stringify(category), { status: 200 });
//     } else {
//       return new Response(null, { status: 200 });
//     }
//   } catch {
//     return new Response(JSON.stringify({ error: "Failed to fetch user" }), {
//       status: 500,
//     });
//   }
// }

// export async function DELETE(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   try {
//     if (!id) {
//       throw new Error("Cannot delete category");
//     }

//     const docRef = doc(db, "categories", id);

//     await deleteDoc(docRef)
//       .then(() => new Response(null, { status: 200 }))
//       .catch(() => {
//         throw new Error("Cannot delete category");
//       });
//   } catch {
//     return new Response(
//       JSON.stringify({ error: "Failed to delete category" }),
//       {
//         status: 500,
//       }
//     );
//   }
// }
