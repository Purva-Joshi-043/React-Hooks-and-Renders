import React, { useState } from "react";

const initState = ["Purva", "Joshi"];
export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);
  const handleClick = () => {
    const newPersons = [ ...persons ];
    newPersons.push("Nayan");
    newPersons.push("Akash");
    setPersons(newPersons);
  };
  console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick}>Click </button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
