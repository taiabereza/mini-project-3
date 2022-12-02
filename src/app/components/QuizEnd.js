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
        <div className="quiz">
            <h2>HEEEHEEE</h2>
            <p>YOU WON OR WHATEVS</p>
            <p>YOUR POINTS: {points} out of 5</p>
            <button className="button button-submit"
                onClick={handleClick}>
                ПОВЕРНУТИСЯ ДО СТАРТОВОГО ЕКРАНУ
            </button>
        </div>
    )
}