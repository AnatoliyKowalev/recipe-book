import React, { FC } from "react";
import { TypeBrand } from "@/types/brands";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const BrandCard: FC<TypeBrand> = ({
  src,
  link,
  name,
  description,
  badges,
  contacts,
}) => {
  return (
    <div className="md:col-span-6 flex flex-col">
      <div className="text-lg font-bold mb-2">{name}</div>
      <div className="h-[40px] flex items-center flex-wrap gap-2 justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          {badges?.map((badge) => (
            <Badge variant="outline" key={badge}>
              {badge}
            </Badge>
          ))}
        </div>
        <Image
          src={src}
          className="ml-auto h-full w-fit max-w-[200px] min-w-[150px] object-contain"
          width={200}
          height={150}
          alt={name}
        />
      </div>
      <p className="my-4 whitespace-pre-line">{description}</p>
      <div>{link}</div>
      {contacts?.length ? (
        <div className="flex flex-col gap-1 mt-2">
          {contacts.map((contact) => (
            <div className="text-gray-500" key={contact}>
              {contact}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BrandCard;
