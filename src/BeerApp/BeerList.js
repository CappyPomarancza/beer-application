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
        numberOfLoadedData: 15
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
    loadMore = () => {
        this.setState({
            numberOfLoadedData: this.state.numberOfLoadedData + 15
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
                width: '30%',
                height: '200px',
                maxHeight: '300px',
                backgroundColor: 'yellow'
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
                .filter((el, index, arr) => index < this.state.numberOfLoadedData)
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

        const brewerList = (
            [...new Set(mapedBrewerList)]
            &&
            [...new Set(mapedBrewerList)]
            .map((el,i,arr)=>(
                <Brewer 
                brewer={el}
                />
            ))
        )
        
        console.log(brewerList)
        return (
            <MyPaper>
                <div className='container' style={styles.container}>
                    <div className='brewerList' style={styles.column}>
                        <List>
                        </List>
                    </div>
                    <div className='brewerList' style={styles.column}>
                        <List>

                        </List>
                    </div>
                    <div className='brewerList' style={styles.column}>
                        <List>
                            {brewerList}
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
                                onClick={this.loadMore}
                            >
                                Load more
                        </Button>
                        </List>
                }
            </MyPaper>
        )
    }
}
export default BeerList