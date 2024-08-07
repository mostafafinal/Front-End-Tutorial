import "../recordList/RecordList.css";
function RecordListItems({ records }) {
  if (!records || records.length === 0) {
    return <div>No records available</div>;
  }
  return records.map((obj) => {
    const month = obj.date.toLocaleString("default", { month: "long" });
    const day = obj.date.getDate();
    const year = obj.date.getFullYear();
    return (
      <ul key={obj.id} className="record-list">
        <li className="date">
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </li>
        <li>{obj.meal}</li>
        <li>{obj.content}</li>
      </ul>
    );
  });
}

export { RecordListItems };
