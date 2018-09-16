import React from 'react'

const SingleSetOfQuestions = (props) => (
    <div>
        <button>
            {props.name}
        </button>
        <button
            onClick={props.deleteSetOfQuestions}>
            DELETE
        </button>
    </div>
)

export default SingleSetOfQuestions