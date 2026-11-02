import { useState, useEffect } from "react";
import Board from "./components/Board.jsx";
import "./App.css";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme === "dark";
        }

        const savedDarkMode = localStorage.getItem("isDarkMode");
        return savedDarkMode === "true";
    });

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        localStorage.setItem("isDarkMode", isDarkMode.toString());
    }, [isDarkMode]);

    return (
        <main className={`app ${isDarkMode ? "dark" : "light"}`}>
            <button
                className="theme-toggle"
                type="button"
                onClick={() => setIsDarkMode((darkMode) => !darkMode)}
                aria-pressed={isDarkMode}
            >
                Switch to {isDarkMode ? "light" : "dark"} mode.
            </button>
            <Board />
        </main>
    );
}

export default App;
