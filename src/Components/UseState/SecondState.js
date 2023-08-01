import React, { useState } from "react";

const SecondState = () => {
  const [name, setName] = useState("Pankaj");
  const [flag, setFlag] = useState(false);
  function toggleName() {
    return setFlag(!flag);
  }
  return (
    <div>
      <div>Hello: {flag ? name : "welcome"}</div>
      <button onClick={toggleName}>Click me</button>
    </div>
  );
};

export default SecondState;
