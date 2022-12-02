import { useState } from "react";
import QuizEnd from "../components/QuizEnd";

import QuizForm from "../components/QuizForm";
import QuizStart from "../components/QuizStart";

export default function Quiz() {

	const [gameState, setGameState] = useState({
		isStartingScreen: true,
		isGameOn: false,
		isGameOver: false
	});

	const [points, setPoints] = useState(0);
	const [quizTheme, setQuizTheme] = useState('');

	const { isStartingScreen, isGameOn, isGameOver } = gameState;

	return (
		<div className="page page-quiz">
			<header>
				<h1>КВІЗ</h1>
			</header>

			<main>
				<div className="container">

					{(isStartingScreen)
						? <QuizStart gameState={gameState}
							setGameState={setGameState}
							setQuizTheme={setQuizTheme}
						/>
						: null}

					{(isGameOn)
						? <QuizForm gameState={gameState}
							setGameState={setGameState}
							points={points}
							setPoints={setPoints}
							quizTheme={quizTheme}
						/>
						: null}

					{(isGameOver)
						? <QuizEnd gameState={gameState}
							setGameState={setGameState}
							points={points}
							setPoints={setPoints}
						/>
						: null}

				</div>
			</main>
		</div>
	)
}