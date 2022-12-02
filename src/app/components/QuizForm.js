import { ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import QuizAnswer from "./QuizAnswer";

export default function QuizForm({ gameState, setGameState, points, setPoints, quizTheme }) {

	const MAX_TIME = 10;

	const [formState, setFormState] = useState({
		maxCount: 5,
		question: '',
		answers: ['', '', '', ''],
		rightAnswer: '',
	})

	const { question, answers, rightAnswer, maxCount } = formState;

	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [timerSeconds, setTimerSeconds] = useState(MAX_TIME);

	const checkAnswer = () => {
		let userAnswer = document.querySelector('.quiz-answer-chosen');
		if (userAnswer) {
			if (userAnswer.getAttribute('data-answer-index') === rightAnswer) {
				setPoints(points + 1);
			}
		}
	}

	const endQuiz = () => {
		const timer = setTimeout(() => {
			setGameState({
				...gameState,
				isGameOn: false,
				isGameOver: true,
			})
			clearTimeout(timer);
		}, 800)
	}

	const dbURL = 'https://my-json-server.typicode.com/taiabereza/quiz-questions/db';

	useEffect(() => {
		setIsLoading(true);
		axios.get(dbURL).then((response) => {
			let theme = response.data[quizTheme];
			console.log(theme);
			setFormState({
				...formState,
				maxCount: Object.entries(theme).length,
				question: (count < maxCount) ? theme[count].question : question,
				answers: (count < maxCount) ? answers.map((answer, i) => answer = theme[count].answers[i]) : answers,
				rightAnswer: (count < maxCount) ? theme[count].rightAnswer : rightAnswer,
			});
		}).catch(error => 'Щось пішло не так')
			.finally(() => {
				if (count < maxCount) {
					setTimerSeconds(MAX_TIME);
					setIsLoading(false);
				};
			})

		let answersSet = document.getElementsByClassName('quiz-answer');
		[...answersSet].forEach(answer => {
			answer.classList.remove('quiz-answer-chosen');
		})

	}, [count]);

	useEffect(() => {
		let timer = null;
		if (timerSeconds > 0) {
			if (!isLoading) {
				timer = setInterval(() => {
					setTimerSeconds(timerSeconds => timerSeconds -= 1)
				}, 1000);
			} else {
				clearInterval(timer);
			}

			return () => {
				if (timerSeconds !== 0) {
					clearInterval(timer);
				}
			}
		} else {
			checkAnswer();
			if (count === maxCount - 1) {
				endQuiz();
			}
			setCount(count + 1);
			clearInterval(timer);
		}
	}, [timerSeconds])

	const handleSubmit = (e) => {
		e.preventDefault();
		let userAnswer = document.querySelector('.quiz-answer-chosen');
		if (userAnswer) {
			checkAnswer();
			setCount(count + 1);
			if (count === maxCount - 1) {
				endQuiz();
			}
		}
	}


	return (
		<form className="quiz"
			onSubmit={(e) => { handleSubmit(e) }}>
			<ProgressBar min={0} max={5} now={count} />
			<h3 className="quiz-question">
				Питання <span>{(count + 1 >= 6) ? 5 : count + 1}</span> / 5
			</h3>
			<p className="quiz-timer">
				00:{(timerSeconds < 10) ? '0' + timerSeconds : timerSeconds}
			</p>
			<p className="quiz-question-text">
				{(isLoading)
					? 'Завантажується...'
					: (quizTheme === 'lemky')
						? question
						: <img src={question} />
				}
			</p>
			<div className="quiz-answers">
				{answers.map((answer, i) => {
					return <QuizAnswer text={answers[i].answer}
						answerIndex={answers[i].index}
						key={i} />
				})}
			</div>
			<button className="button button-submit">
				Наступне
			</button>
		</form>
	)
}