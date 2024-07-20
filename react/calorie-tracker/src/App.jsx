import {
  RecordListItems,
  RecordsList,
} from "./components/recordList/RecordList";
import RecordForm from "./components/recordForm/recordForm";
function App() {
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
        <RecordForm />
      </div>
      <div className="list-wrapper">
        <RecordListItems records={RecordsList} />
      </div>
    </div>
  );
}

export default App;
