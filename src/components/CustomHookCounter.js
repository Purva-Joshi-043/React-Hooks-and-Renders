import React, { useState } from "react";
import UseCounter from "../Hooks/UseCounter";

function CustomHookCounter() {
const [count,increment,decrement,reset] = UseCounter(0,1)
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );


}

export default CustomHookCounter;
