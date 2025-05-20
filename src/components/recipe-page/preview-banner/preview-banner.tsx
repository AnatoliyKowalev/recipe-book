import React, { FC } from "react";
import { PreviewBannerProps } from "./interfaces";
import Image from "next/image";

const PreviewBanner: FC<PreviewBannerProps> = ({ recipe }) => {
  const { fields } = recipe;

  return (
    <div className="w-full aspect-video bg-gray-200 rounded-2xl shadow-lg overflow-hidden relative">
      <Image
        src={`https:${fields.image.fields.file.url}`}
        className="object-cover"
        alt={fields.image.fields.title}
        priority
        fill
      />
      <div className="absolute left-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-[200px] px-10">
        <div className="absolute left-8 bottom-4 text-lg font-bold text-white">
          {fields.name}
        </div>
      </div>
    </div>
  );
};

export default PreviewBanner;
