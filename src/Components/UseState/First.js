import React, { useState } from "react";

const First = () => {
  const [name, setName] = useState("Pankaj");
  function changeName() {
    setName("Prachi");
  }
  return (
    <div>
      <div>Hello, {name}</div>
      <button onClick={changeName}>Click Me</button>
    </div>
  );
};

export default First;
