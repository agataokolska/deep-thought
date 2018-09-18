import React from 'react'
import { Link } from 'react-router-dom'
import { database } from '../../firebaseConfig'
import ListOfQuestions from './ListOfQuestions'
import Container from '../Container'

class ListOfQuestionsToChoose extends React.Component {
    state = {
        questions: [
        ],
        isAddedToSet: false,
        checked: false
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

    addToSet = (index) => {
        const newQuestions = this.state.questions
        newQuestions[index]. isAddedToSet = !newQuestions[index]. isAddedToSet
        this.setState({
            questions: newQuestions
        })
    }

    updateCheck = () => {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          }
        })
      }

    render() {

        return (
            <div>
                <Container>
                <h2>Choose a question to your set</h2>
                </Container>
             
                <Container>
                    <ListOfQuestions
                        questions={this.state.questions}
                        addToSet={this.addToSet} 
                        updateCheck={this.updateCheck.bind(this)}
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
export default ListOfQuestionsToChoose