import React from 'react'

const Form = (props) => (
    <div>
        <input
            type="text"
            placeholder={'write name of your new set of questions here'}
            value={props.setOfQuestionsName}
            onChange={props.onNewSetOfQuestionsChange}>
        </input>
        <button
            onClick={props.addSetOfQuestions}>
            ADD NEW SET
        </button>
    </div>
)

export default Form

