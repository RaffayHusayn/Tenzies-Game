import "./App.css";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <div className="dice-grid">
        <Dice value="2" />
        <Dice value="1" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
        <Dice value="2" />
      </div>
    </div>
  );
}

export default App;
