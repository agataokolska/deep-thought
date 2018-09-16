import React from 'react'
import { ListItem } from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'

const SingleSetOfQuestions = (props) => (
    <div>
        <ListItem
            primaryText={props.name}
            rightIcon={<Delete onClick={props.deleteSetOfQuestions} />}
        />
    </div>
)

export default SingleSetOfQuestions