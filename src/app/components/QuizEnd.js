export default function QuizEnd({ gameState, setGameState, points, setPoints }) {
    const handleClick = () => {
        setGameState({
            ...gameState,
            isGameOver: false,
            isStartingScreen: true,
        })
        setPoints(0);
    }
    return (
        <div className="quiz quiz-end">
            <h2 className="quiz-header">ВИ ПРОЙШЛИ КВІЗ!</h2>
            <p className="quiz-descr">Зароблені вами бали: <span>{points} / 5</span></p>

            <button className="button button-submit"
                onClick={handleClick}>
                ПОВЕРНУТИСЯ ДО СТАРТОВОГО ЕКРАНУ
            </button>
        </div>
    )
}