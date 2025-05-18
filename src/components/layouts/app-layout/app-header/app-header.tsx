"use client";

import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import NavMain from "./nav-main";
import { cn } from "@/lib/utils";
import ContactSubHeader from "../contact-sub-header";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import BurgerMenu from "./burder-menu";
import ContactModal from "@/components/home-page/contact-modal";
import Link from "next/link";

const AppHeader: FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full flex flex-col z-[10]">
      <ContactSubHeader />
      <header
        className={cn("bg-card transition-shadow duration-300", {
          "shadow-lg": isSticky,
        })}
        ref={headerRef}
      >
        <div className="container mx-auto flex justify-start md:justify-between py-4 w-full items-center">
          <Link href="#top">
            <Image
              src="/svg/advisor-auto-logo.svg"
              width={155}
              height={50}
              alt="company logo"
              priority
            />
          </Link>
          <NavMain className="hidden lg:block ml-auto" />
          <ContactModal>
            <Button
              className="ml-auto mr-2 md:m-none"
              aria-label="Консультація"
            >
              <Phone className="block md:hidden" />
              <span className="hidden md:block">Консультація</span>
            </Button>
          </ContactModal>
          <BurgerMenu />
        </div>
      </header>
    </div>
  );
};

export default AppHeader;
