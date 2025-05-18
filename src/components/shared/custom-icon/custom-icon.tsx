import React, { FC } from "react";
import { CustomIconProps } from "./interfaces";

const CustomIcon: FC<CustomIconProps> = ({ icon, className, ...rest }) => {
  return <i className={`custom-icon icon-${icon} ${className}`} {...rest} />;
};

export default CustomIcon;
