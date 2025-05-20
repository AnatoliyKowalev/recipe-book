import Image from "next/image";
import { Block, BLOCKS, Inline } from "@contentful/rich-text-types";

export const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      const { title, description, file } = node.data.target.fields;

      return (
        <Image
          src={`https:${file.url}`}
          alt={description || title}
          width={1000}
          height={800}
          className="w-full h-auto rounded-lg"
        />
      );
    },
  },
};
