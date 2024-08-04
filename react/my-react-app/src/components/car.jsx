import { useState } from "react";
function Car() {
  const [myCar, setMyCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");

  // Handlers
  const btnClickHandler = () => {
    const newCar = {
      year: carYear,
      name: carName,
      model: carModel,
    };
    setMyCar((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarName("");
    setCarModel("");
  };
  const removeCarClickHandler = (index) =>
    setMyCar((c) => c.filter((_, i) => i !== index));
  const carYearChangeHandler = (event) => {
    setCarYear(event.target.value);
  };
  const carNameChangeHandler = (event) => {
    setCarName(event.target.value);
  };
  const carModelChangeHandler = (event) => {
    setCarModel(event.target.value);
  };
  return (
    <div>
      <h1>List of Car Objects</h1>
      <ul>
        {myCar.map((car, index) => (
          <li key={index} onClick={() => removeCarClickHandler(index)}>
            {car.year} {car.name} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={carYearChangeHandler} />
      <input
        type="text"
        placeholder="Enter Car Name"
        value={carName}
        onChange={carNameChangeHandler}
      />
      <input
        type="text"
        placeholder="Enter Car Model"
        value={carModel}
        onChange={carModelChangeHandler}
      />
      <button onClick={btnClickHandler}>Add Car</button>
    </div>
  );
}
export default Car;
