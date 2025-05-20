import React, { FC } from "react";
import Link from "next/link";
import { PageHeaderProps } from "./interfaces";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const PageHeader: FC<PageHeaderProps> = ({ title, backLink }) => {
  return (
    <div className="flex flex-col items-start gap-1 text-xl mt-2 mb-6">
      {backLink ? (
        <Button variant="link" asChild>
          <Link href={backLink} className="flex items-center !px-0">
            <ChevronLeft /> Назад
          </Link>
        </Button>
      ) : null}
      <h2>{title}</h2>
    </div>
  );
};

export default PageHeader;
