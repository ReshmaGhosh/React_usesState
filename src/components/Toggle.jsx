import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState("OFF");

  function toggle() {
    isOn === "ON" ? setIsOn("OFF") : setIsOn("ON");
  }

  return (
    <div>
      <p>Toggle</p>

      <p>The toggle is : {isOn} </p>

      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
