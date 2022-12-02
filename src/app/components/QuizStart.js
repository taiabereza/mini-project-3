import { useState, useEffect, useRef } from "react";

export default function QuizStart({ gameState, setGameState, setQuizTheme }) {

    const theme = useRef(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        setQuizTheme(theme.current.value);
        console.log(theme.current.value);
    }, [theme, value]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setGameState({
            ...gameState,
            isStartingScreen: false,
            isGameOn: true,
        })
    }




    return (
        <div className="quiz">
            <h2>HELLO</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <select name="quiz-theme"
                    id="quiz-theme"
                    ref={theme}
                    className="values-currency-select"
                    defaultValue="lemky"
                    onChange={(e) => setValue(e.target.value)}
                >
                    <option className="values-currency-option" value="lemky">Лемківський діалект</option>
                    <option className="values-currency-option" value="movies">Фільми 80-90х</option>
                </select>
                <button className="button button-submit"
                >
                    Розпочати
                </button>
            </form>
        </div>
    )
} 