import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const BrewerList = (props) => {

    const styles = {
        container: {
            display: 'flex',
            backgroundColor: 'lightBlue'
        },
        column: {
            marginLeft: '10px',
            width: '30%',
            height: '30%',
            backgroundColor: 'blue'
        }
    }


    return (
        <div
            style={styles.container}
        >
            <div style={styles.column} className='left-brewer-list'>
                {
                    'bla bla'
                }
            </div>
            <div style={styles.column} className='center-brawer-list'>center list test</div>
            <div style={styles.column} className='right-brawer-list'>right list test</div>
        </div>
    )
}

export default BrewerList