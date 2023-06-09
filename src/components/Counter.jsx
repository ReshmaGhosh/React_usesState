import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  function increment() {
    const newValue = value + 1;
    setValue(newValue);
  }
  function decrement() {
    const newValue = value - 1;
    setValue(value - 1);
  }

  return (
    <div>
      <h1>React hook: Usestate</h1>

      <h1>Counter</h1>

      <button onClick={increment}>+</button>

      <p>Printing value :{value}</p>

      <button onClick={decrement}>-</button>
    </div>
  );
}
