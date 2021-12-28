import React, { useState } from "react";
import {MemoisedChildTwo} from './ChildTwo'

const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('Purva')
  console.log("ParentTwo render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count- {count}</button>
      <button onClick={() => setName("Joshi")}>Change Name</button>
      <MemoisedChildTwo
       name={name} />
    </div>
  );
};

export default ParentTwo;
