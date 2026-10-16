import Square from "./Square";
import "./style.css";
import { useState } from "react";
export default function Board() {
    const [status, setStatus] = useState([1, 2, 3]);

    function handleClick(idx) {
        const masik = status.map((value, index) => (index === idx ? value + 1 : value));
        console.log(masik);
        setStatus(masik);
    }
    return (
        <div className="board">
            <Square value={status[0]} onSquareClick={() => handleClick(0)} />
            <Square value={status[1]} onSquareClick={() => handleClick(1)} />
            <Square value={status[2]} onSquareClick={() => handleClick(2)} />
        </div>
    );
}
