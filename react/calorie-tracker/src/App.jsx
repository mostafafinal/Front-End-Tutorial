import { RecordListItems } from "./components/recordList/RecordList";
import RecordForm from "./components/recordForm/recordForm";
import { useState } from "react";
const RecordsList = [
  {
    meal: "Breakfast",
    calories: 350,
    content: "Eggs",
    date: new Date("2024-03-06"),
  },
  {
    meal: "Breakfast",
    calories: 400,
    content: "Beans",
    date: new Date("2024-03-07"),
  },
  {
    meal: "Breakfast",
    calories: 300,
    content: "Fava Bean",
    date: new Date("2024-03-08"),
  },
  {
    meal: "Breakfast",
    calories: 500,
    content: "Chocolate",
    date: new Date("2024-03-09"),
  },
];
function App() {
  const [recordsList, setRecordList] = useState(RecordsList);
  const formSubmitHandler = (rec) => {
    setRecordList([...recordsList, rec]);
    console.log(rec);
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
