import Image from "next/image";
import { Block, BLOCKS, Inline } from "@contentful/rich-text-types";
import { ReactNode } from "react";

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
    }, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.HEADING_1]: (_: Block | Inline, children: ReactNode) => (
      <h3 className="text-3xl font-bold mt-6 mb-3">{children}</h3>
    ), // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.HEADING_2]: (_: Block | Inline, children: ReactNode) => (
      <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>
    ), // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.HEADING_3]: (_: Block | Inline, children: ReactNode) => (
      <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
    ), // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.HEADING_4]: (_: Block | Inline, children: ReactNode) => (
      <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>
    ), // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.HEADING_5]: (_: Block | Inline, children: ReactNode) => (
      <h3 className="text-md font-semibold mt-2 mb-1">{children}</h3>
    ), // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.HEADING_6]: (_: Block | Inline, children: ReactNode) => (
      <h3 className="text-sm font-semibold mt-2 mb-1">{children}</h3>
    ), // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.PARAGRAPH]: (_: Block | Inline, children: ReactNode) => (
      <p className="mb-2">{children}</p>
    ), // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.QUOTE]: (_: Block | Inline, children: ReactNode) => (
      <blockquote className="pl-3 border-l-4 border-[color:var(--muted-foreground)] text-[color:var(--muted-foreground)]">
        {children}
      </blockquote>
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.HR]: (_: Block | Inline) => <hr className="my-6" />,
  },
};
