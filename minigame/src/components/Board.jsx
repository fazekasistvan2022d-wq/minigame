import { useRef, useState } from "react";
import { PLAYER_O, PLAYER_X, Square } from "./Square";

const WIN_POSITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export default function Board() {
    const [status, setStatus] = useState(new Array(9).fill(undefined));
    const [winner, setWinner] = useState();
    let lastPlayer = useRef();

    // Update the game status, ignore the click if the player is invalid or it is the same as the last one
    //  - idx: index of the square
    //  - mouseButton: left or right mouse button
    function handleClick(idx, player) {
        // ignore the invalid players (to make it foolproof)
        if (player !== PLAYER_O && player !== PLAYER_X) return;

        // ignore the repeated steps
        if (lastPlayer.current === player) return;

        // ignore the occupied cells
        if (status[idx]) return;

        // ignore if gameOver
        if (winner) return;

        // update the status
        lastPlayer.current = player;
        const newStatus = status.map((value, index) => (index === idx ? player : value));
        win_check(newStatus, player);
        setStatus(newStatus);
    }

    function win_check(newStatus, player) {
        const win_array = WIN_POSITIONS.map((pos) => {
            const c1 = newStatus[pos[0]];
            const c2 = newStatus[pos[1]];
            const c3 = newStatus[pos[2]];
            return c1 && c1 === c2 && c1 === c3 ? true : false;
        });
        console.log(newStatus, win_array);
        if (win_array.some((value) => value)) setWinner(player);
    }

    function handlePlayAgain() {
        setStatus(new Array(9).fill(undefined));
        setWinner(undefined);
        lastPlayer.current = undefined;
    }

    return (
        <div className="board">
            <div className="board-row">
                <Square value={status[0]} onSquareClick={(mouseButton) => handleClick(0, mouseButton)} />
                <Square value={status[1]} onSquareClick={(mouseButton) => handleClick(1, mouseButton)} />
                <Square value={status[2]} onSquareClick={(mouseButton) => handleClick(2, mouseButton)} />
            </div>
            <div className="board-row">
                <Square value={status[3]} onSquareClick={(mouseButton) => handleClick(3, mouseButton)} />
                <Square value={status[4]} onSquareClick={(mouseButton) => handleClick(4, mouseButton)} />
                <Square value={status[5]} onSquareClick={(mouseButton) => handleClick(5, mouseButton)} />
            </div>
            <div className="board-row">
                <Square value={status[6]} onSquareClick={(mouseButton) => handleClick(6, mouseButton)} />
                <Square value={status[7]} onSquareClick={(mouseButton) => handleClick(7, mouseButton)} />
                <Square value={status[8]} onSquareClick={(mouseButton) => handleClick(8, mouseButton)} />
            </div>
            {winner && <div>`Game over! {winner} won`</div>}
            {winner && <button onClick={handlePlayAgain}>Reset</button>}
        </div>
    );
}
