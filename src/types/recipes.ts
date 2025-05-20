import type { Document } from "@contentful/rich-text-types";
import { TypeContentfulMedia } from "./common";

export type TypeContentfulRecipe = {
  fields: TypeRecipe;
  sys: {
    id: string;
  };
};

export type TypeRecipe = {
  name: string;
  image: TypeContentfulMedia;
  ingredients: Document;
  script: Document;
};
