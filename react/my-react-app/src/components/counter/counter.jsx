import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const minusHandler = () => {
    setCount(count - 1);
  };
  const plusHandler = () => {
    setCount(count + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ display: "block", fontSize: "2rem" }}>{count}</span>
      <button onClick={minusHandler}>-</button>
      <button onClick={resetHandler}>rest</button>
      <button onClick={plusHandler}>+</button>
    </div>
  );
}

export default Counter;
