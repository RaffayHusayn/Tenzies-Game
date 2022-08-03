import Dice from "./Dice";
import { useState } from "react";
import "../styles/DiceContainer.css";
import { nanoid } from "nanoid";

function DiceContainer() {
  const [dices, setDices] = useState(allDiceNumber());
  function randomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rollDices() {
    setDices(allDiceNumber());
  }

  function holdDice(id, value) {
    const newDices = dices.map((dice) =>
      dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
    );
    setDices(newDices);
  }

  function generateDice() {
    return {
      value: randomNumberFromInterval(1, 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allDiceNumber() {
    const allDiceArray = [];
    for (let i = 0; i < 10; i++) {
      allDiceArray.push(generateDice());
    }
    return allDiceArray;
  }

  console.log(dices);
  return (
    <div className="dice-container">
      <div className="dice-grid">
        {dices.map((dice) => (
          <Dice
            key={dice.id}
            id={dice.id}
            value={dice.value}
            isHeld={dice.isHeld}
            holdDice={holdDice}
          />
        ))}
      </div>
      <button className="roll-btn" onClick={rollDices}>
        Roll
      </button>
    </div>
  );
}

export default DiceContainer;
