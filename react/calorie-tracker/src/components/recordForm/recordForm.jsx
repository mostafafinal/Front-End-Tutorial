import "./CaloriesRecordForm.css";
function RecordForm() {
  return (
    <form>
      <label htmlFor="date">Date:</label>
      <input type="date" name="date" id="date" />
      <label htmlFor="meal">Meal:</label>
      <select name="meal" id="meal">
        <option>Breakfast</option>
        <option>Launch</option>
        <option>Snack</option>
        <option>Dinner</option>
      </select>
      <label htmlFor="content">Content:</label>
      <input type="text" name="content" id="content" />
      <label htmlFor="calories">Calories</label>
      <input type="number" name="calories" id="" />
      <button>Add Record</button>
    </form>
  );
}

export default RecordForm;
