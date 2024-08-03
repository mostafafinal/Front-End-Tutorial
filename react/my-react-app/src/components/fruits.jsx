import { useState } from "react";
function Fruits() {
  const fruitsArr = ["Mango", "Coconuts", "Peach"];
  const [fruits, setFruits] = useState(fruitsArr);
  const fruitInputHandler = () => {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";
    setFruits((f) => [...f, newFruit]);
  };
  const removeFruitHandler = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => removeFruitHandler(index)}>
            {fruit}
          </li>
        ))}
      </ul>
      <input type="text" id="fruitInput" />
      <button onClick={fruitInputHandler}>Add Fruit</button>
    </div>
  );
}
export default Fruits;
