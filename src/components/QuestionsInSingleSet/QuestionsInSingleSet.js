import React from 'react'
import FormForQuestion from './FormForQuestion'
import { database } from '../../firebaseConfig'
import ListOfQuestions from './ListOfQuestions'
import Container from '../Container'

class QuestionInSingleSet extends React.Component {
    state = {
        questions: [
        ],
        questionName: ''
    }

    componentWillMount() {
        database
            .ref(`/question`)
            .on('value',
                snapshot => {
                    const data = snapshot.val()
                    this.setState({
                        questions: Object.entries(data || {}).map(item => (
                            { id: item[0], ...item[1] }))
                    })
                })
    }


    onQuestionChange = (event) => {
        this.setState({
            questionName: event.target.value
        })
    }


    addQuestion = () => {
        database.ref(`/question`).push({
            name: this.state.questionName, uid: Date.now()
        })
    }

    deleteQuestion = (id) => {

        //database.ref(`/question/${id}`).remove()
        const newQuestionList = this.state.questions.filter(question => id !== question.uid)
        this.setState({
            questions: newQuestionList
        })
    }


    render() {

        return (
            <div>
                <Container>
                    <FormForQuestion
                        onQuestionChange={this.onQuestionChange}
                        addQuestion={this.addQuestion}
                        questionName={this.state.questionName}
                    />
                </Container>
                <Container>
                    <ListOfQuestions
                        questions={this.state.questions}
                        deleteQuestion={this.deleteQuestion}
                    />
                </Container>
            </div>
        )
    }
}
export default QuestionInSingleSet