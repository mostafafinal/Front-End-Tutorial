import { useState } from "react";
import "./CaloriesRecordForm.css";
function RecordForm(props) {
  const [maxCaloriesValue, setMaxCaloriesValue] = useState(0);
  //   const [dateValue, setDateValue] = useState();
  //   const [mealValue, setMealValue] = useState();
  //   const [contentValue, setContentValue] = useState();
  //   const [caloriesValue, setCaloriesValue] = useState();
  const DEFAULT_VALUE = {
    date: new Date(),
    meal: "",
    content: "",
    calories: 0,
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);
  const dateChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      date: new Date(event.target.value),
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
    props.onFormSubmit(mealRecord);
    setMealRecord(DEFAULT_VALUE);
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
      <input
        onChange={contentChangeHandler}
        type="text"
        value={mealRecord.content}
        id="content"
      />
      <label htmlFor="calories">Calories</label>
      <input
        onChange={caloriesChangeHandler}
        type="number"
        value={mealRecord.calories}
        id="calories"
      />
      <button>Add Record</button>
    </form>
  );
}

export default RecordForm;
