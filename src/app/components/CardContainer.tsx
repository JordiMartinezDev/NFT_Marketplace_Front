import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const CardContainer = (props: Props) => {
  return (
    <div className="container  ">
      <div className="flex flex-wrap gap-4">{props.children}</div>
    </div>
  );
};

export default CardContainer;
