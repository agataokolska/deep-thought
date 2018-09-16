import React from 'react'
import Form from './Form'

import ListOfSetsOfQuestions from './ListOfSetsOfQuestions'

class DisplaySetOfQuestions extends React.Component {
    state = {
        sets: [
            { name: 'set one', uid: '1234' },
            { name: 'set two', uid: '2345' },
            { name: 'set three', uid: '5678' }
        ],
        setOfQuestionsName: ''
    }

    onNewSetOfQuestionsChange = (event) => {
        this.setState({
            setOfQuestionsName: event.target.value
        })
    }

    addSetOfQuestions = () => {
        if (this.state.setOfQuestionsName === '') return

        this.setState({
            sets: this.state.sets.concat(
                {
                    name: this.state.setOfQuestionsName,
                    uid: Date.now()
                }
            ),
            setOfQuestionsName: ''
        })
    }

    deleteSetOfQuestions = (setUid) => {
        const newSet = this.state.sets.filter(set => setUid !== set.uid)
        this.setState({
            sets: newSet
        })
    }

    render() {
        return (
            <div>
                <Form
                    onNewSetOfQuestionsChange={this.onNewSetOfQuestionsChange}
                    addSetOfQuestions={this.addSetOfQuestions}
                    setOfQuestionsName={this.state.setOfQuestionsName}
                />
                <ListOfSetsOfQuestions
                    sets={this.state.sets}
                    deleteSetOfQuestions={this.deleteSetOfQuestions}
                />
            </div>
        )
    }
}
export default DisplaySetOfQuestions