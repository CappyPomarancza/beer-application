import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText, List } from '@material-ui/core'

const Brewer = props => {
    return (
        <List >
            <ListItem button >
                <ListItemText>
                    {props.brewer}
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default Brewer