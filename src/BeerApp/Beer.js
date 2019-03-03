import React from 'react'
import  ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const Beer = (props) => {
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar
                    src={props.beer.image_url}
                />
            </ListItemAvatar>
            <ListItemText>
                {props.beer.name}
            </ListItemText>
        </ListItem>
    )
}

export default Beer