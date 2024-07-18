import { RecordListItems, RecordsList } from "./components/RecordList";
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
      <div className="list-wrapper">
        <RecordListItems records={RecordsList} />
      </div>
    </div>
  );
}

export default App;
