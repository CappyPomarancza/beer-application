import React from 'react'
import BrewerList from './BrewerList'
import Loading from './Loading'
import MyPaper from './MyPaper'
import Beer from './Beer'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import Brewer from './Brewer';
import { ListItem } from '@material-ui/core';

class BeerList extends React.Component {
    state = {
        isLoadingBeerList: false,
        beerData: null,
        default: 'Please wait',
        numberOfLoadedBeer: 15,
        numberOfLoadedBrewer: 10
    }

    componentDidMount() {
        this.setState({
            isLoadingBeerList: true
        })
        fetch("https://cors.io/?http://ontariobeerapi.ca/beers/")
            .then(response => response.json())
            .then(dataFromResponse =>
                this.setState({
                    beerData: dataFromResponse
                })
            )
        this.setState({
            isLoadingBeerList: false,
        })
    }
    loadMoreBeer = () => {
        this.setState({
            numberOfLoadedBeer: this.state.numberOfLoadedBeer + 15
        })
    }
    loadMoreBrewer = () => {
        this.setState({
            numberOfLoadedBrewer: this.state.numberOfLoadedBrewer + 10
        })
    }

    render() {
        const styles = {
            container: {
                display: 'flex',
                maxHeight: '300px'
            },
            column: {
                marginLeft: '10px',
                width: '70%',
                maxWidth: 360,
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
            }
        }
        console.log(this.state.beerData)

        const beerList = (
            this.state.beerData
            &&
            this.state.beerData
                .map(el => (
                    el
                ))
        )
        const mapedBeerList = (
            beerList
            &&
            beerList
                .filter((el, index, arr) => index < this.state.numberOfLoadedBeer)
                .map((el, i, arr) => (
                    <Beer
                        beer={el}
                        key={el.product_id}
                    />
                ))
        )

        const mapedBrewerList = (
            this.state.beerData
            &&
            this.state.beerData
                .map((el, i) => (
                    el.brewer
                ))
        )

        return (
            <MyPaper>
                <div className='container' style={styles.container}>
                    <div className='brewerList' style={styles.column}>
                        <List>
                            {[...new Set(mapedBrewerList)]
                                &&
                                [...new Set(mapedBrewerList)]
                                .filter((el, index, arr) => index < this.state.numberOfLoadedBrewer)
                                    .map((el, i, arr) => (
                                        <ListItem>
                                            <Brewer
                                                brewer={el}
                                            />
                                        </ListItem>
                                    ))
                            }
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={this.loadMoreBrewer}
                            >
                                Load more beer
                        </Button>
                        </List>
                    </div>
                </div>
                {
                    this.state.isLoadingBeerList ?
                        <Loading />
                        :
                        <List>
                            {mapedBeerList}
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={this.loadMoreBeer}
                            >
                                Load more beer
                        </Button>
                        </List>
                }
            </MyPaper>
        )
    }
}
export default BeerList