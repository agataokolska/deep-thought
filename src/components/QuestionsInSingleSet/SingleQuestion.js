import React from 'react'
import { ListItem } from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'

const SingleQuestion = (props) => (
    <div>
    <ListItem
            primaryText={props.name}
            rightIcon={<Delete onClick={props.deleteQuestion} />}
        />
    </div>
)
export default SingleQuestion