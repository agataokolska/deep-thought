import React from 'react'
import SingleSetOfQuestions from './SingleSetOfQuestions'

const ListOfSetsOfQuestions = (props) => (
    <div>
        {props.sets.map((set) => (
            <SingleSetOfQuestions
                name={set.name}
                key={set.uid}
                deleteSetOfQuestions={() => props.deleteSetOfQuestions(set.uid)} 
                onSingleSetClick={()=>props.onSingleSetClick(set.uid)}
            />
        ))
        }
    </div>
)

export default ListOfSetsOfQuestions