import React from 'react'
import { ListItem } from 'material-ui/List'
import { Checkbox } from 'material-ui';

const SingleQuestion = (props) => (
    <div>
    <ListItem
            primaryText={props.name}
            rightIcon={<Checkbox
                checked={props.updateCheck.bind(this)} 
                onCheck={props.addToSet} />}
        />
    </div>
)
export default SingleQuestion