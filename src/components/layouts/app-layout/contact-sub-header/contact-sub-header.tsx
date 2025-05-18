import { Mail, Phone } from "lucide-react";
import React, { FC } from "react";
import { mediaLinks } from "./constants";
import CustomIcon from "@/components/shared/custom-icon";

const ContactSubHeader: FC = () => {
  return (
    <div className="w-full bg-muted-foreground py-2 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="tel:+380664402737"
            className="flex items-center gap-2 hover:underline"
          >
            <Phone className="h-4 w-4" />
            +38 066 440 27 37
          </a>
          <a
            href="mailto:manageradvisorauto@gmail.com"
            className="items-center gap-2 hover:underline hidden md:flex"
          >
            <Mail className="h-4 w-4" />
            manageradvisorauto@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          {mediaLinks.map(({ link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="nofollow"
              className="flex hover:opacity-80"
              aria-label={icon}
              key={link}
            >
              <CustomIcon icon={icon} className="text-lg" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSubHeader;
