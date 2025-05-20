"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FC } from "react";
import { RteBlockProps } from "./interfaces";

const RteBlock: FC<RteBlockProps> = ({ content, className }) => {
  return <div className={className}>{documentToReactComponents(content)}</div>;
};

export default RteBlock;
