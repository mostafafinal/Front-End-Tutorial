import "./CalorieRecord.css";

function CalorieRecord(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.getDate();
  const year = props.date.getFullYear();
  return (
    <ul className="parent-list">
      <li className="date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </li>
      <li>{props.meal}</li>
      <li>{props.food}</li>
      <li>{props.calories}</li>
    </ul>
  );
}

export default CalorieRecord;
