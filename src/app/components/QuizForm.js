import { ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import QuizAnswer from "./QuizAnswer";

export default function QuizForm() {

	const [formState, setFormState] = useState({
		question: '',
		answers: ['', '', '', ''],
		rightAnswer: ''
	})

	const { question, answers, rightAnswer } = formState;

	const [count, setCount] = useState(0);

	const dbURL = 'https://my-json-server.typicode.com/taiabereza/quiz-questions/db';

	useEffect(() => {
		axios.get(dbURL).then((response) => {
			setFormState({
				...formState,
				question: response.data[count].question,
				answers: answers.map((answer, i) => answer = response.data[count].answers[i]),
				rightAnswer: response.data[count].rightAnswer,
			});
		})
		
		let answersSet = document.getElementsByClassName('quiz-answer');
		[...answersSet].forEach(answer => {
			answer.classList.remove('quiz-answer-chosen');
		})
		
	  }, [count]);
	  
	
	const [points, setPoints] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		let userAnswer = document.querySelector('.quiz-answer-chosen');
		if(userAnswer.getAttribute('data-answer-index') === formState.rightAnswer) {
			console.log('correct'); 
			setPoints(points + 1);
		} else {
			console.log('incorrect');
		}
		setCount(count + 1);
	}


	return (
		<form className="quiz"
			onSubmit={(e) => {handleSubmit(e)}}>
			<ProgressBar min={0} max={5} now={count} />
			<h3 className="quiz-question">
				Питання <span>{(count + 1 >= 6) ? 5 : count + 1}</span> / 5
			</h3>
			<p className="quiz-question-text">
				{formState.question}
			</p>
			<div className="quiz-answers">
				<QuizAnswer text={formState.answers[0].answer}
					answerIndex={formState.answers[0].index} />
				<QuizAnswer text={formState.answers[1].answer}
					answerIndex={formState.answers[1].index} />
				<QuizAnswer text={formState.answers[2].answer}
					answerIndex={formState.answers[2].index} />
				<QuizAnswer text={formState.answers[3].answer}
					answerIndex={formState.answers[3].index} />
			</div>
            <button className="button button-submit"
				>
                Наступне
            </button>
		</form>
	)
}