// "use client";

import React, { FC } from "react";

import { mainMenu } from "./constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavMainProps } from "./interfaces";

const NavMain: FC<NavMainProps> = ({ className, onClick }) => {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList className="menu flex items-center">
        {mainMenu.map((item) => {
          return (
            <NavigationMenuItem key={item.url}>
              <NavigationMenuLink
                href={item.url}
                className={navigationMenuTriggerStyle()}
                onClick={() => onClick?.()}
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMain;
