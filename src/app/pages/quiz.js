import QuizForm from "../components/QuizForm";

export default function Quiz() {
	return (
		<div className="page page-quiz">
			<header>
				<h1>КВІЗ</h1>
			</header>

			<main>
				<div className="container">
					<QuizForm />
				</div>
			</main>
		</div>
	)
}