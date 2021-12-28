import React, { useState } from "react";
import { MemoisedChildfour } from "./ChildFour";
import { MemoisedChildThree } from "./ChildThree";

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Purva");
  console.log("ParentThree render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count- {count}</button>
      <button onClick={() => setName("Joshi")}>Change Name</button>
      {/* <MemoisedChildThree name={name}>
          <strong>Hello</strong>
      </MemoisedChildThree> */}
      <MemoisedChildfour name={name}/>
    </div>
  );
};

export default ParentThree;
