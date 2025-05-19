import Image from "next/image";
import React, { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="h-[60vh] relative">
      <Image
        src="/img/main-banner-bg.webp"
        // src="/img/11.jpg"
        alt="банер"
        className="object-cover rounded-[1rem]"
        priority
        fill
      />
    </div>
  );
};

export default MainBanner;
