import React from 'react'
import { ListItem } from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
const SingleSetOfQuestions = (props) => (
    <div>
        <ListItem
            primaryText={props.name}
            rightIcon={<Delete onClick={props.deleteSetOfQuestions} />}
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} onClick={props.onSingleSetClick}/>}
        />
    </div>
)
export default SingleSetOfQuestions