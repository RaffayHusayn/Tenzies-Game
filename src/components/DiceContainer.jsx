import Dice from "./Dice";
import { useState } from "react";
import "../styles/DiceContainer.css";

function DiceContainer() {
  const [dices, setDices] = useState(allDiceNumber());
  function randomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rollDices() {
    setDices(() => {
      return allDiceNumber();
    });
  }

  function allDiceNumber() {
    const allDiceArray = [];
    for (let i = 0; i < 10; i++) {
      allDiceArray.push(randomNumberFromInterval(1, 6));
    }
    return allDiceArray;
  }

  return (
    <div className="dice-container">
      <div className="dice-grid">
        {dices.map((diceNumber, index) => (
          <Dice key={index} value={diceNumber} />
        ))}
      </div>
      <button className="roll-btn" onClick={rollDices}>
        Roll
      </button>
    </div>
  );
}

export default DiceContainer;
