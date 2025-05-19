import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="h-[60vh] relative">
      <Image
        src="/img/main-banner-bg.webp"
        alt="банер"
        className="object-cover rounded-[1rem]"
        priority
        fill
      />
      <Button className="absolute right-0 bottom-0" asChild>
        <Link href="/categories">Categories</Link>
      </Button>
    </div>
  );
};

export default MainBanner;
