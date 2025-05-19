import React, { FC, PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const CategoryLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Button variant="link" asChild>
          <Link href="/categories">
            <ChevronLeft /> Назад
          </Link>
        </Button>
      </div>
      {children}
    </>
  );
};

export default CategoryLayout;
