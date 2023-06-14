import "../styles/Counter.css"
export default function Counter({count}){
    return(
        // <div style={{background: "white", border: "solid red 1px", width: "70px", margin: "auto", display:"flex", justifyContent: "center", alignItems: "center", marginBottom: "30px", borderRadius: "10px" }}>
        <div className="counter"> 
            <h1 className="counter-text"> {count}</h1>
        </div>
    )
}