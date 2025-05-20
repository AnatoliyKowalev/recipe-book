export type TypeCategory = {
  name: string;
  image: TypeContentfulMedia;
};

export type TypeContentfulCategory = {
  fields: TypeCategory;
  sys: {
    id: string;
  };
};

export type TypeContentfulMedia = {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
};
