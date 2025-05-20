"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import fryEgg from "./fry-egg.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loader: FC = () => {
  return (
    <Lottie
      animationData={fryEgg}
      loop={true}
      className="h-[60vh] my-[10vh] absolute top-0 w-full"
    />
  );
};

export default Loader;
