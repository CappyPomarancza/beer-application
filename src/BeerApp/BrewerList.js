import React from 'react'


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
    console.log(props.beerList)
    return (
        <div
            style={styles.container}
        >
            <div style={styles.column} className='left-brewer-list'>

            </div>
            <div style={styles.column} className='center-brawer-list'>center list test</div>
            <div style={styles.column} className='right-brawer-list'>right list test</div>
        </div>
    )
}

export default BrewerList