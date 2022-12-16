import { memo, useEffect, useRef } from "react";

import "./style.css";

type MathJaxRender = {
  math?: string | any;
  styletext?: string;
  className?: string;
};

const MathJaxRender = ({ math, styletext, className }: MathJaxRender) => {
  const idDom = useRef(null);

  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.typesetPromise([idDom]);
    }
  }, [math]);

  return (
    <div ref={idDom} className={className}>
      {" "}
      <div
        dangerouslySetInnerHTML={{ __html: math }}
        className={`${styletext}`}
      ></div>
    </div>
  );
};

export default memo(MathJaxRender);
