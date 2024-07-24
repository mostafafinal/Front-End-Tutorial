import { RecordListItems } from "./components/recordList/RecordList";
import RecordForm from "./components/recordForm/recordForm";
import { useState } from "react";
const RecordsList = [
  {
    id: 1,
    meal: "Breakfast",
    calories: 350,
    content: "Eggs",
    date: new Date("2024-03-06"),
  },
  {
    id: 2,
    meal: "Breakfast",
    calories: 400,
    content: "Beans",
    date: new Date("2024-03-07"),
  },
  {
    id: 3,
    meal: "Breakfast",
    calories: 300,
    content: "Fava Bean",
    date: new Date("2024-03-08"),
  },
  {
    id: 4,
    meal: "Breakfast",
    calories: 500,
    content: "Chocolate",
    date: new Date("2024-03-09"),
  },
];
function App() {
  const [recordsList, setRecordList] = useState(RecordsList);
  const [nextID, setNextID] = useState(5);
  const formSubmitHandler = (rec) => {
    const record = {
      ...rec,
      id: nextID,
    };
    setNextID((lastValue) => lastValue + 1);
    setRecordList((prevRecords) => [record, ...prevRecords]);
  };
  return (
    <div className="App">
      <h2>
        Let's try to test the lagging issue again after disabling the ESLint
        extension
      </h2>
      <p>
        Now I think that the tiny lagging that happens it's related to the code
        intellisense extension
      </p>
      <div className="from-wrapper">
        <RecordForm onFormSubmit={formSubmitHandler} />
      </div>
      <div className="list-wrapper">
        <RecordListItems records={recordsList} />
      </div>
    </div>
  );
}

export default App;
