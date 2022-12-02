import { useRef } from "react";

export default function QuizAnswer({ text, answerIndex }) {

    const answer = useRef(null);

    const handleClick = () => {
        let answersSet = document.getElementsByClassName('quiz-answer');
        [...answersSet].forEach(answer => {
            answer.classList.remove('quiz-answer-chosen');
        })
        answer.current.classList.add('quiz-answer-chosen');
    };

    return (
        <div className="quiz-answer"
            ref={answer}
            data-answer-index={answerIndex}
            onClick={handleClick}>
            {text}
        </div>
    )
}