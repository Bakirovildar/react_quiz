import React from "react";
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
    return (

        <li
            className={classes.AnswerItem}
            onClick={() => props.clickAnswer(props.answer.id)}

        >{props.answer.item}</li>

    )
}

export default AnswerItem