import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const CardContainer = (props: Props) => {
  return (
    <div className="container m-auto py-8 max-w-7xl ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {props.children}
      </div>
    </div>
  );
};

export default CardContainer;
