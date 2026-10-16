import Square from "./Square";
import "./style.css";
export default function Board() {
    return (
        <div className="board">
            <p>Egyszerű szöveg</p>
            <Square />
            <Square />
            <Square />
        </div>
    );
}
