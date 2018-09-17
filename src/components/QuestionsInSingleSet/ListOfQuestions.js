import React from 'react'
import SingleQuestion from './SingleQuestion'

const ListOfQuestions = (props) => (
    <div>
        {props.questions.map((question) => (
            <SingleQuestion
                name={question.name}
                key={question.uid}
                deleteQuestion={() => props.deleteQuestion(question.uid)} 
            />
        ))
        }
    </div>
)

export default ListOfQuestions