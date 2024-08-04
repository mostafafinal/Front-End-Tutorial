import { useState } from "react";
function Car() {
  const [mycar, setMyCar] = useState([]);
  const [yaerMade, setYearMade] = useState(new Date().getFullYear());
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const btnClickHandler = () => {
    const newCar = {
      name: carName,
      model: carModel,
      year: yaerMade,
    };
    setMyCar((c) => [...c, newCar]);
    setYearMade(new Date().getFullYear());
    setCarName("");
    setCarModel("");
  };

  const carNameChangeHandler = (event) => {
    setCarName(event.target.value);
  };
  const carModelChangeHandler = (event) => {
    setCarModel(event.target.value);
  };
  const yearMadeChangeHandler = (event) => {
    setYearMade(event.target.value);
  };

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {mycar.map((car, index) => (
          <li key={index}>
            {car.year}
            {car.name}
            {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={yaerMade} onChange={yearMadeChangeHandler} />
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
