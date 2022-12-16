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
            <h2 className="quiz-header">ОБЕРІТЬ ТЕМУ КВІЗУ</h2>
            <form className="quiz-choice" onSubmit={(e) => handleSubmit(e)}>
                <select name="quiz-theme"
                    id="quiz-theme"
                    ref={theme}
                    className="values-currency-select"
                    defaultValue="lemky"
                    onChange={(e) => setValue(e.target.value)}
                >
                    <option className="values-currency-option" value="lemky">Лемківський діалект</option>
                    <option className="values-currency-option" value="movies">Фільми 80-90х</option>
                    <option className="values-currency-option" value="moviesByDescr">Нудні описи до популярних фільмів</option>
                </select>

                <div className="quiz-descr">
                    {
                        theme.current && theme.current.value === "lemky"
                            ? 'Встановіть значення слів з лемківського діалекту, спираючись на приклади вживання.'
                            :  theme.current && theme.current.value === "movies"
                                ? 'Вгадайте фільми з 80-90х років тільки за кадрами з них.'
                                : 'Вгадайте найвідоміші фільми за їхніми найнуднішими описами.'
                    }
                </div>


                <button className="button button-submit"
                >
                    Розпочати
                </button>
            </form>
        </div>
    )
} 