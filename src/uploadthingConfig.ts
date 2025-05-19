import { createUploadthing, UTApi, type FileRouter } from "uploadthing/server";

export const utapi = new UTApi();

export const uploadthing = createUploadthing();

export const uploadRouter: FileRouter = {
  imageUploader: uploadthing({
    image: { maxFileSize: "4MB" },
  }).onUploadComplete(({ file }) => {
    console.log("Upload complete:", file);
  }),
};
