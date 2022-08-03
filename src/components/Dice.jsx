import "../styles/Dice.css";
function Dice(props) {
  return (
    <div
      className={"dice-face " + (props.isHeld ? "dice-held" : "")}
      onClick={() => props.holdDice(props.id, props.value)}
    >
      <h2>{props.value}</h2>
    </div>
  );
}

export default Dice;
