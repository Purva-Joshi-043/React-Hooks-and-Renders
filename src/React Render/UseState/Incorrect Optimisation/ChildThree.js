import React from "react";

export const ChildThree = ({children,name}) => {
  console.log("ChildThree Render");
  return <div>{children} {name}</div>;
};
export const MemoisedChildThree = React.memo(ChildThree);
