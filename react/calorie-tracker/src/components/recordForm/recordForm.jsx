import { useState } from "react";
import "./CaloriesRecordForm.css";
function RecordForm() {
  const [maxCaloriesValue, setMaxCaloriesValue] = useState(0);
  //   const [dateValue, setDateValue] = useState();
  //   const [mealValue, setMealValue] = useState();
  //   const [contentValue, setContentValue] = useState();
  //   const [caloriesValue, setCaloriesValue] = useState();
  const [mealRecord, setMealRecord] = useState({});
  const dateChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  };
  const mealChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };
  const contentChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
  };
  const caloriesChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      calories: event.target.value,
    });
    if (maxCaloriesValue < event.target.value) {
      setMaxCaloriesValue(event.target.value);
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(mealRecord);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Max Calories Value: {maxCaloriesValue}</h2>
      <label htmlFor="date">Date:</label>
      <input onChange={dateChangeHandler} type="date" id="date" />
      <label htmlFor="meal">Meal:</label>
      <select onChange={mealChangeHandler} id="meal">
        <option>Breakfast</option>
        <option>Launch</option>
        <option>Snack</option>
        <option>Dinner</option>
      </select>
      <label htmlFor="content">Content:</label>
      <input onChange={contentChangeHandler} type="text" id="content" />
      <label htmlFor="calories">Calories</label>
      <input onChange={caloriesChangeHandler} type="number" id="calories" />
      <button>Add Record</button>
    </form>
  );
}

export default RecordForm;
