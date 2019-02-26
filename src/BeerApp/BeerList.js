import React from 'react'
import BrewerList from './BrewerList';
import Loading from './Loading';
import MyPaper from './MyPaper';

class BeerList extends React.Component {
    state = {
        isLoadingBeerList: false,
        beerList: null
    }

    componentDidMount() {
        this.setState({
            isLoadingBeerList: true
        })
        fetch("https://cors.io/?http://ontariobeerapi.ca/beers/")
            .then(response => response.json())
            .then(dataFromResponse =>
                this.setState({
                    beerList: JSON.stringify(dataFromResponse)
                })

            );
        this.setState({
            isLoadingBeerList: false,
        })
    }

    render() {
        const styles = {
            container: {
                display: 'flex',
                backgroundColor: 'lightBlue'
            },
            column: {
                marginLeft: '10px',
                width: '30%',
                height: '200px',
                backgroundColor: 'indygo'
            }
        }

        return (
            <MyPaper>
                
                   { this.state.isLoadingBeerList ?
                        <Loading />
                        :

                        <BrewerList
                            beerList={this.state.beerList}
                            breweList={this.beersList}
                        />
                   }
                        <div
                            style={styles.container}
                        >
                            <div style={styles.column} className="left-container" >test left</div>
                            <div style={styles.column} className="center-container" >test center</div>
                            <div style={styles.column} className="rigth-container" >test right</div>

                        </div>
                
            </MyPaper>
        )
    }
}

export default BeerList