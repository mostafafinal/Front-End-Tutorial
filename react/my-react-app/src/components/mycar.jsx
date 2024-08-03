import { useState } from "react";
function MyCar() {
  const myCar = { name: "BMW", model: "2024", made: "Germany" };
  const [car, setCar] = useState(myCar);
  const nameChangeHandler = (event) =>
    setCar((c) => ({ ...c, name: event.target.value }));
  const modelChangeHandler = (event) =>
    setCar((c) => ({ ...c, model: event.target.value }));
  const madeChangeHandler = (event) =>
    setCar((c) => ({ ...c, made: event.target.value }));
  return (
    <div>
      <h4>
        My Car is {car.name} Made In {car.made}, In {car.model}
      </h4>
      <input type="text" value={car.name} onChange={nameChangeHandler} />
      <input type="number" value={car.model} onChange={modelChangeHandler} />
      <input type="text" value={car.made} onChange={madeChangeHandler} />
    </div>
  );
}
export default MyCar;
