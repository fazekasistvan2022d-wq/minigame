import { useState } from "react";
import Board from "./components/Board.jsx";
import "./App.css";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <main className={`app ${isDarkMode ? "dark" : "light"}`}>
            <button
                className="theme-toggle"
                type="button"
                onClick={() => setIsDarkMode((darkMode) => !darkMode)}
                aria-pressed={isDarkMode}
            >
                Switch to {isDarkMode ? "light" : "dark"} mode
            </button>
            <Board />
        </main>
    );
}

export default App;
