import React from "react";
import classes from './AnswerQuiz.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerQuiz = props => {
    return (
        <ul className={classes.AnswerQuiz}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        clickAnswer={props.clickAnswer}
                    />
                )
            })}
        </ul>
    )
}

export default AnswerQuiz