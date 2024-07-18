import "../components/RecordList.css";

const RecordsList = [
  {
    meal: "Breakfast",
    calories: "350",
    food: "Eggs",
    date: new Date("2024-03-06"),
  },
  {
    meal: "Breakfast",
    calories: "400",
    food: "Beans",
    date: new Date("2024-03-07"),
  },
  {
    meal: "Breakfast",
    calories: "300",
    food: "Fava Bean",
    date: new Date("2024-03-08"),
  },
  {
    meal: "Breakfast",
    calories: "500",
    food: "Chocolate",
    date: new Date("2024-03-09"),
  },
];
function RecordListItems({ records }) {
  if (!records || records.length === 0) {
    return <div>No records available</div>;
  }

  return records.map((obj, index) => {
    const month = obj.date.toLocaleString("default", { month: "long" });
    const day = obj.date.getDate();
    const year = obj.date.getFullYear();

    return (
      <ul key={index} className="record-list">
        <li className="date">
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </li>
        <li>{obj.meal}</li>
        <li>{obj.food}</li>
        <li>{obj.calories}</li>
      </ul>
    );
  });
}

export { RecordListItems, RecordsList };
