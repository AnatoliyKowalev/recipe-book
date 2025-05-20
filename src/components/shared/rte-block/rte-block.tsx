"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FC } from "react";
import { RteBlockProps } from "./interfaces";
import { cn } from "@/lib/utils";
import { renderOptions } from "./constants";

import styles from "./styles.module.css";

const RteBlock: FC<RteBlockProps> = ({ content, className }) => {
  return (
    <div className={cn(styles["rte-block"], className)}>
      {documentToReactComponents(content, renderOptions)}
    </div>
  );
};

export default RteBlock;
