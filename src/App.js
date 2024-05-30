import logo from "./logo.svg";
import "./App.css";
import D3chart from "./components/d3chart";
function createSomeData() {
  console.log("using react for front end developement");
}

function App() {
  createSomeData();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <D3chart />
      </div>
    </div>
  );
}

export default App;
