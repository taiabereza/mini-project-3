export default function QuizStart({ gameState, setGameState }) {

    const handleClick = () => {
        setGameState({
            ...gameState,
            isStartingScreen: false,
            isGameOn: true,
        })
    }

    return (
        <div className="quiz">
            <h2>HELLO</h2>
            <button className="button button-submit"
                onClick={handleClick}
                >
                Розпочати
            </button>
        </div>
    )
} 