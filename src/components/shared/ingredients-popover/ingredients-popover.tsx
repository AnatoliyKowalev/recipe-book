import React, { FC } from "react";
import { IngredientsPopoverProps } from "./interfaces";
import { Button } from "@/components/ui/button";
import { Beaker } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RteBlock from "../rte-block";
import { cn } from "@/lib/utils";

const IngredientsPopover: FC<IngredientsPopoverProps> = ({
  ingredients,
  className,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn("absolute right-2 top-2", className)}
          variant="outline"
          size="sm"
        >
          <Beaker />
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
