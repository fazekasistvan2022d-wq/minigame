import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Board from "./components/Board";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Board />
        </div>
    );
}

export default App;
