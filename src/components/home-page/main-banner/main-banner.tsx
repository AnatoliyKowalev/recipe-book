import Image from "next/image";
import React, { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="h-[30vh] lg:h-[60vh] relative flex items-center justify-center">
      <Image
        src="/img/main-banner-bg.webp"
        alt="банер"
        className="object-cover rounded-[1rem]"
        priority
        fill
      />
      <Image
        src="/img/share-logo.webp"
        alt="логотип круглий"
        className="rounded-full w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] absolute ml-[10%] mt-[5%]"
        width={300}
        height={300}
      />
    </div>
  );
};

export default MainBanner;
