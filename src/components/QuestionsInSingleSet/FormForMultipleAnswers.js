import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    width: '80vw',
    marginRight: '30px'
}
const FormForMultipleAnswers = (props) => (
    <div>
        <TextField
            placeholder={'write your answer here'}
            value={props.answerName}
            onChange={props.onAnswerChange}
            style={styles}
        />
        <RaisedButton
            label="ADD NEW"
            primary={true}
            onClick={props.addAnswer}
        />
    </div>
)

export default FormForMultipleAnswers

