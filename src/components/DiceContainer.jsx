import Dice from "./Dice";
import { useEffect, useState } from "react";
import "../styles/DiceContainer.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { Counter } from "./Counter";

function DiceContainer({addCounter, resetCounter}) {
  const [dices, setDices] = useState(allDiceNumber());
  const [tenzies, setTenzies] = useState(false);

  //runs whenever we change anything in the dice state by either rolling new dices or holding a dice
  useEffect(() => {
    const isGameWon = dices.every(
      (dice) => dice.value === dices[0].value && dice.isHeld === true
    );
    setTenzies(isGameWon);
  }, [dices]);

  useEffect(() => {
    if(tenzies){
      resetCounter()
      console.log("game is won")
    }else{
      console.log("game is not yet won")
    }
  }, [tenzies]);

  function randomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rollDices() {
    setDices((prevDices) =>
      prevDices.map((prevDice) => {
        return prevDice.isHeld === true ? prevDice : generateDice();
      })
    );
    addCounter()
  }

  function newGame() {
    setDices(allDiceNumber);
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
      {/* {tenzies ? (
        <button className="roll-btn" onClick={newGame}>
          New Game
        </button>
      ) : (
        <button className="roll-btn" onClick={rollDices}>
          Roll
        </button>
      )} */}
      <button className="roll-btn" onClick={tenzies ? newGame : rollDices}>
        {tenzies ? "New Game" : "Roll"}
      </button>
      {tenzies && <Confetti />}
    </div>
  );
}

export default DiceContainer;
