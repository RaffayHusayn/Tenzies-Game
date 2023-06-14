import { useState } from "react";
import "./App.css";
import DiceContainer from "./components/DiceContainer";
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState(0)
  const addCounter =()=>{
    setCount(prevCount => prevCount + 1)
  }
  const resetCounter = ()=>{
    setCount(0)
  }
  return (
    <>
    <Counter count={count}/>
    <div className="App">
      <DiceContainer addCounter = {addCounter} resetCounter={resetCounter} />
    </div>
    </>
  );
}

export default App;
