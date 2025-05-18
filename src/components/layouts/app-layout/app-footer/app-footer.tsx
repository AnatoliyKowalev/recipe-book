import CustomIcon from "@/components/shared/custom-icon";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { FC } from "react";
import { mediaLinks } from "../contact-sub-header/constants";
import { Separator } from "@/components/ui/separator";
import { CURRENT_YEAR } from "./constants";

const AppFooter: FC = () => {
  return (
    <footer className="bg-foreground text-white relative mt-auto">
      <div className="container mx-auto flex gap-x-20 gap-y-10 py-12 flex-wrap">
        <div className="flex flex-col gap-4">
          <div className="mb-4 text-lg font-bold">Центральний офіс</div>
          <div className="flex items-center gap-2">
            <MapPin />
            Київ, Україна вул. Васильківська, 14, офіс 319
          </div>
          <div className="flex items-center gap-2">
            <Phone />
            <a href="tel:+380664402737"> +38 066 440 27 37 </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail />
            <a href="mailto:manageradvisorauto@gmail.com">
              manageradvisorauto@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mb-4 text-lg font-bold">Соціальні мережі</div>
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
                <CustomIcon icon={icon} className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <Separator />
      <div className="container mx-auto py-6">{`Copyright ${CURRENT_YEAR} - AdvisorAuto`}</div>
    </footer>
  );
};

export default AppFooter;
