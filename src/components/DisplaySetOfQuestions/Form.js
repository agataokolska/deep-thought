import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    width: '80vw',
    marginRight: '30px'
}
const Form = (props) => (
    <div>
        <TextField
            placeholder={'write name of your new set of questions here'}
            value={props.setOfQuestionsName}
            onChange={props.onNewSetOfQuestionsChange}
            style={styles}
        />
        <RaisedButton
            label="ADD NEW SET"
            primary={true}
            onClick={props.addSetOfQuestions}
        />
    </div>
)

export default Form

