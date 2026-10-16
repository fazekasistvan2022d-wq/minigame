import Square from "./Square";
import "./style.css";
import { useState } from "react";
export default function Board() {
    const [status, setStatus] = useState([1, 2, 3]);
    return (
        <div className="board">
            <p>Egyszerű szöveg</p>
            <Square value={status[0]} />
            <Square value={status[1]} />
            <Square value={status[2]} />
        </div>
    );
}
