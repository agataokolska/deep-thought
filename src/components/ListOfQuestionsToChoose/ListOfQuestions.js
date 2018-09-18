import React from 'react'
import SingleQuestion from './SingleQuestion'

const ListOfQuestions = (props) => (
    <div>
        {props.questions.map((question,index) => (
            <SingleQuestion
                name={question.name}
                key={question.uid}
                addToSet={() => props.addToSet(index)}
                updateCheck={() => props.updateCheck.bind(this)}
            />
        ))
        }
    </div>
)

export default ListOfQuestions