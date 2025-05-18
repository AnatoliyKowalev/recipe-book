"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FC, useState } from "react";
import NavMain from "./nav-main";

const BurgerMenu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden p-2" aria-label="Меню">
        <Menu className="w-6 h-6 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="right" className="z-[100] px-10">
        <SheetTitle className="text-lg font-semibold mt-4">Меню</SheetTitle>
        <NavMain
          onClick={() => setOpen(false)}
          className="[&_.menu]:flex-col [&_.menu]:items-start [&_.menu]:-ml-4 mt-10"
        />
      </SheetContent>
    </Sheet>
  );
};
export default BurgerMenu;
