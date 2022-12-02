import { ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import QuizAnswer from "./QuizAnswer";

export default function QuizForm({ gameState, setGameState, points, setPoints }) {

	const [formState, setFormState] = useState({
		maxCount: 5,
		question: '',
		answers: ['', '', '', ''],
		rightAnswer: '',
	})

	const { question, answers, rightAnswer, maxCount } = formState;

	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const dbURL = 'https://my-json-server.typicode.com/taiabereza/quiz-questions/db';

	useEffect(() => {
		setIsLoading(true);
		axios.get(dbURL).then((response) => {
			setFormState({
				...formState,
				maxCount: Object.entries(response.data).length,
				question: (count < maxCount) ? response.data[count].question : question,
				answers: (count < maxCount) ? answers.map((answer, i) => answer = response.data[count].answers[i]) : answers,
				rightAnswer: (count < maxCount) ? response.data[count].rightAnswer : rightAnswer,
			});
		}).catch(error => 'Щось пішло не так')
		.finally(() => setIsLoading(false))

		let answersSet = document.getElementsByClassName('quiz-answer');
		[...answersSet].forEach(answer => {
			answer.classList.remove('quiz-answer-chosen');
		})

	}, [count]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let userAnswer = document.querySelector('.quiz-answer-chosen');
		if (userAnswer) {
			if (userAnswer.getAttribute('data-answer-index') === rightAnswer) {
				console.log('correct');
				setPoints(points + 1);
			} else {
				console.log('incorrect');
			}
			setCount(count + 1);


			if (count === maxCount-1) {
				const timer = setTimeout(() => {
					setGameState({
						...gameState,
						isGameOn: false,
						isGameOver: true,
					})
					clearTimeout(timer);
				}, 800)
			}
		} else {
			return;
		}
	}


	return (
		<form className="quiz"
			onSubmit={(e) => { handleSubmit(e) }}>
			<ProgressBar min={0} max={5} now={count} />
			<h3 className="quiz-question">
				Питання <span>{(count + 1 >= 6) ? 5 : count + 1}</span> / 5
			</h3>
			<p className="quiz-question-text">
				{(isLoading) ? 'Завантажується...' : question}
			</p>
			<div className="quiz-answers">
				{answers.map((answer, i) => {
					return <QuizAnswer text={answers[i].answer}
						answerIndex={answers[i].index}
						key={i} />
				})}
			</div>
			<button className="button button-submit"
			>
				Наступне
			</button>
		</form>
	)
}