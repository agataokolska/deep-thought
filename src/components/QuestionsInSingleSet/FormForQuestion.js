import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    width: '80vw',
    marginRight: '30px'
}
const FormForQuestion = (props) => (
    <div>
        <TextField
            placeholder={'write your question here'}
            value={props.questionName}
            onChange={props.onQuestionChange}
            style={styles}
        />
        <RaisedButton
            label="ADD NEW"
            primary={true}
            onClick={props.addQuestion}
        />
    </div>
)

export default FormForQuestion

