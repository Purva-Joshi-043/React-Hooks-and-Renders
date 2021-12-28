import React from "react";

export const ChildTwo = () => {
  console.log("ChildTwo Render");
  return <div>ChildTwo Component</div>;
};
export const MemoisedChildTwo = React.memo(ChildTwo)
