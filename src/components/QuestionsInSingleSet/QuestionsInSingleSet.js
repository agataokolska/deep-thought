import React from 'react'
import { Link } from 'react-router-dom'
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
        this.setState({
            questionName: ''
        })
    }

    deleteQuestion = (id) => {
        const ref = database.ref(`/question/`);
        ref
            .orderByChild('uid')
            .equalTo(id)
            .once('value', snapshot => {
                const updates = {};
                snapshot.forEach(child => updates[child.key] = null);
                ref.update(updates);
            });
        const newQuestionList = this.state.questions.filter(question => id !== question.uid)
        this.setState({
            questions: newQuestionList
        })
    }


    render() {

        return (
            <div>
                <Container>
                    <h2>Add your open question</h2>
                </Container>
                <Container>
                    <FormForQuestion
                        onQuestionChange={this.onQuestionChange}
                        addQuestion={this.addQuestion}
                        questionName={this.state.questionName}
                    />
                </Container>

                {/* <Container>
                <h2>Add your multiple choice question</h2>
                </Container>
                <Container>
                    <FormForQuestion
                        onQuestionChange={this.onQuestionChange}
                        addQuestion={this.addQuestion}
                        questionName={this.state.questionName}
                    />

                </Container> */}
                <Container>
                    <ListOfQuestions
                        questions={this.state.questions}
                        deleteQuestion={this.deleteQuestion}
                    />
                </Container>
                <Container>
                    <Link
                        to={`/`}
                        style={{
                            textDecoration: 'none',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'black'
                        }}
                    >
                        Go back to set of questions

                </Link>
                </Container>
            </div>
        )
    }
}
export default QuestionInSingleSet