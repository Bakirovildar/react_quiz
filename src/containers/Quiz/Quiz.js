import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
        activeQuestions: 0,
        Quiz: [
            {
                questions: 'Какого цвета елка?',
                rigthAnswerId: 3,
                id: 1,
                answer: [
                    {item: 'Синий', id: 1},
                    {item: 'Красный', id: 2},
                    {item: 'Зеленый', id: 3},
                    {item: 'Черный', id: 4},
                ]
            },
            {
                questions: 'Любимый вид спорта?',
                rigthAnswerId: 1,
                id: 2,
                answer: [
                    {item: 'Футбол', id: 1},
                    {item: 'Хоккей', id: 2},
                    {item: 'Баскетбол', id: 3},
                    {item: 'Волейбол', id: 4},
                ]
            }
        ]
    }

    onAnswerClick = answerId => {
        console.log(answerId)

        this.setState({
            activeQuestions: this.state.activeQuestions + 1
        })

    }

    render() {
        return (
            <div className={classes.Quiz}>
               <div>
                   <h1>Quiz</h1>
                   <ActiveQuiz
                       key={1}
                       answers={this.state.Quiz[this.state.activeQuestions].answer}
                       questions={this.state.Quiz[this.state.activeQuestions].questions}
                       clickAnswer={this.onAnswerClick}
                       lengthQuestions={this.state.Quiz.length}
                       answerNumber={this.state.activeQuestions + 1}
                   />
               </div>
            </div>
        )
    }
}

export default Quiz