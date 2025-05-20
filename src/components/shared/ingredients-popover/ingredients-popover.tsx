import React, { FC } from "react";
import { IngredientsPopoverProps } from "./interfaces";
import { Button } from "@/components/ui/button";
import { ListOrdered } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RteBlock from "../rte-block";

const IngredientsPopover: FC<IngredientsPopoverProps> = ({ ingredients }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="absolute right-2 top-2" variant="outline">
          <ListOrdered />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 flex flex-col gap-1">
        <div className="font-bold">Інгредієнти:</div>
        {ingredients ? (
          <RteBlock
            content={ingredients}
            className="text-sm max-h-[200px] overflow-y-scroll"
          />
        ) : null}
      </PopoverContent>
    </Popover>
  );
};

export default IngredientsPopover;
