import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core'

const Brewer = props =>{
    return(
        <ListItem button >
            <ListItemText>
                {props.brewer}
            </ListItemText>
        </ListItem>
    )
}

export default Brewer