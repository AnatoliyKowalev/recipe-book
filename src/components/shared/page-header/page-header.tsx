"use client";

import React, { FC } from "react";
import Link from "next/link";
import { PageHeaderProps } from "./interfaces";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-2 text-xl mt-2 mb-6">
      <nav className="flex items-center gap-4">
        <Button
          onClick={() => router.back()}
          className="flex items-center !px-0"
          variant="link"
        >
          <ChevronLeft /> Назад
        </Button>
        ...
        <Button variant="link" asChild>
          <Link href="/" className="flex items-center !px-0">
            <Home /> Головна
          </Link>
        </Button>
      </nav>
      <h2>{title}</h2>
    </div>
  );
};

export default PageHeader;
