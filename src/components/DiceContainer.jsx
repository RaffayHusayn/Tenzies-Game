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
    setDices(() => {
      return allDiceNumber();
    });
  }

  function allDiceNumber() {
    const allDiceArray = [];
    for (let i = 0; i < 10; i++) {
      const diceObj = {
        value: randomNumberFromInterval(1, 6),
        isHeld: true,
        id: nanoid(),
      };
      allDiceArray.push(diceObj);
    }
    return allDiceArray;
  }

  console.log(dices);
  return (
    <div className="dice-container">
      <div className="dice-grid">
        {dices.map((dice) => (
          <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} />
        ))}
      </div>
      <button className="roll-btn" onClick={rollDices}>
        Roll
      </button>
    </div>
  );
}

export default DiceContainer;
