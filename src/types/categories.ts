import { TypeContentfulMedia } from "./common";

export type TypeContentfulCategory = {
  fields: TypeCategory;
  sys: {
    id: string;
  };
};

export type TypeCategory = {
  name: string;
  image: TypeContentfulMedia;
};
