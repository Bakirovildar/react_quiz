import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswerQuiz from "./AnswerQuiz/AnswerQuiz";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Questions}>
                <span>
                    <strong>{props.answerNumber + ' '}</strong>
                    {props.questions}
                </span>

                <small>{props.answerNumber } из { props.lengthQuestions}</small>
            </p>

            <AnswerQuiz
                answers={props.answers}
                clickAnswer={props.clickAnswer}
            />

        </div>
    )
}

export default ActiveQuiz