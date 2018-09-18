import React from 'react'
import Form from './Form'
import { database } from '../../firebaseConfig'
import ListOfSetsOfQuestions from './ListOfSetsOfQuestions'
import Container from '../Container'

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
        database.ref('/group-of-questions').push({
            name: this.state.setOfQuestionsName, uid: Date.now()
        })
        this.setState({
            setOfQuestionsName: ''
        })
    }


    deleteSetOfQuestions = (id) => {
        console.log("deleting: " + id);
        const ref = database.ref(`/group-of-questions/`);
        ref
            .orderByChild('uid')
            .equalTo(id)
            .once('value', snapshot => {
                const updates = {};
                snapshot.forEach(child => updates[child.key] = null);
                ref.update(updates);
            });

        const newSet = this.state.sets.filter(set => id !== set.uid);
        this.setState({
            sets: newSet
        });
    }

    onSingleSetClick = (setUid) => {
        const newSet = this.state.sets.filter(set => setUid === set.uid)
        this.setState({
            sets: newSet
        })
    }


    render() {
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