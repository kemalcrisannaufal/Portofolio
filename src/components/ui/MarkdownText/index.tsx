import { unified } from "unified";
import parse from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";

import { jsx, jsxs, Fragment } from "react/jsx-runtime";

const processor = unified()
  .use(parse)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeReact, {
    jsx,
    jsxs,
    Fragment,
  });

const MarkdownText = ({
  content,
  classname,
}: {
  content: string;
  classname?: string;
}) => {
  return (
    <div className={`font-libre text-sm leading-7 ${classname}`}>
      {processor.processSync(content).result}
    </div>
  );
};

export default MarkdownText;
