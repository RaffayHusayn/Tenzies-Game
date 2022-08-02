import "./App.css";
import Dice from "./components/Dice";

function App() {
  function randomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function allDiceNumber() {
    const allDiceArray = [];
    for (let i = 0; i < 10; i++) {
      allDiceArray.push(randomNumberFromInterval(1, 6));
    }
    return allDiceArray;
  }
  const allDices = allDiceNumber();
  return (
    <div className="App">
      <div className="dice-grid">
        {allDices.map((diceNumber, index) => (
          <Dice key={index} value={diceNumber} />
        ))}
      </div>
    </div>
  );
}

export default App;
