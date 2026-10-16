import Square from "./Square";
import "./style.css";
import { useState } from "react";
export default function Board() {
    const [status, setStatus] = useState([1, 2, 3]);

    function handleClick(idx) {
        alert(idx);
        status.map((value, index) => (index === idx ? value + 1 : value));
    }
    return (
        <div className="board">
            <Square value={1} onSquareClick={() => handleClick(1)} />
            <Square value={2} onSquareClick={() => handleClick(2)} />
            <Square value={3} onSquareClick={() => handleClick(3)} />
        </div>
    );
}
