import "../styles/Dice.css";
function Dice(props) {
  return (
    <div className="dice-face">
      <h2>{props.value}</h2>
    </div>
  );
}

export default Dice;
