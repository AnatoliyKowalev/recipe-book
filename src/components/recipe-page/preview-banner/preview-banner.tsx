"use client";

import React, { FC, useState } from "react";
import { PreviewBannerProps } from "./interfaces";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleCheck, Share2 } from "lucide-react";

const PreviewBanner: FC<PreviewBannerProps> = ({ recipe }) => {
  const { fields } = recipe;

  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
  };

  return (
    <div className="w-full aspect-video bg-gray-200 rounded-2xl shadow-lg overflow-hidden relative">
      <Image
        src={`https:${fields.image.fields.file.url}`}
        className="object-cover"
        alt={fields.image.fields.title}
        priority
        fill
      />
      <Button onClick={copyLink} className="absolute right-0 top-0">
        {copied ? (
          <CircleCheck className="!w-5 !h-5" />
        ) : (
          <Share2 className="!w-5 !h-5" />
        )}
      </Button>
      <div className="absolute left-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full h-[200px] px-10">
        <div className="absolute left-4 md:left-8 bottom-2 md:bottom-4 text-lg font-bold text-white">
          {fields.name}
        </div>
      </div>
    </div>
  );
};

export default PreviewBanner;
