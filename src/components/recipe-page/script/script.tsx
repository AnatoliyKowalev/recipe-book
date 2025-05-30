"use client";

import React, { FC } from "react";
import IngredientsPopover from "@/components/shared/ingredients-popover";
import { ScriptProps } from "./interfaces";

const Script: FC<ScriptProps> = ({ ingredients }) => {
  return (
    <div className="mt-4 flex items-center sticky top-0 bg-card py-2 relative justify-between bg-card-foreground rounded-br-[8px] rounded-bl-[8px] px-4">
      <div className="text-xl font-bold">Інгредієнти:</div>
      <IngredientsPopover
        ingredients={ingredients}
        className="right-2 top-[auto] bottom-[auto]"
      />
    </div>
  );
};

export default Script;
