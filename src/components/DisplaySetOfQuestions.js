import React from 'react'
import Form from './Form'
import { database } from '../firebaseConfig'
import { mapObjectToArray } from '../utils'
import ListOfSetsOfQuestions from './ListOfSetsOfQuestions'
import Container from './Container'

class DisplaySetOfQuestions extends React.Component {
    state = {
        sets: [
            // { name: 'set one', uid: '1234' },
            // { name: 'set two', uid: '2345' },
            // { name: 'set three', uid: '5678' }
        ],
        setOfQuestionsName: ''
    }

    componentWillMount() {
        database
            .ref('/group-of-questions')
            .on('value',
                snapshot => {
                    const data = snapshot.val()
                    this.setState({
                        sets: Object.entries(data || {}).map(item => (
                            { id: item[0], ...item[1] }))
                    })
                })
    }


    onNewSetOfQuestionsChange = (event) => {
        this.setState({
            setOfQuestionsName: event.target.value
        })
    }


    addSetOfQuestions = () => {
        const request = {
            method: 'POST',
            body: JSON.stringify({ name: this.state.setOfQuestionsName, uid: Date.now() })
        }
        fetch('https://questionnaire-app-5cd30.firebaseio.com/group-of-questions.json', request)
            .then(response => {
                this.setState({
                    setOfQuestionsName: ''
                })
            })
    }


    deleteSetOfQuestions = (setUid) => {
        const newSet = this.state.sets.filter(set => setUid !== set.uid)
        this.setState({
            sets: newSet
        })
    }

    onSingleSetClick = (setUid) => {
        const newSet = this.state.sets.filter(set => setUid === set.uid)
        this.setState({
            sets: newSet
        })
    }
    render() {
        const setId = this.props.match.params.uid
        return (
            <div>
                <Container>
                    <Form
                        onNewSetOfQuestionsChange={this.onNewSetOfQuestionsChange}
                        addSetOfQuestions={this.addSetOfQuestions}
                        setOfQuestionsName={this.state.setOfQuestionsName}
                    />
                </Container>
                <Container>
                    <ListOfSetsOfQuestions
                        sets={this.state.sets}
                        deleteSetOfQuestions={this.deleteSetOfQuestions}
                        onSingleSetClick={this.onSingleSetClick}
                    />
                </Container>
            </div>
        )
    }
}
export default DisplaySetOfQuestions