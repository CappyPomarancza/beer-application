import React from 'react'
import BrewerList from './BrewerList';
import Loading from './Loading';
import MyPaper from './MyPaper';
import Beer from './Beer'
import List from '@material-ui/core/List'

class BeerList extends React.Component {
    state = {
        isLoadingBeerList: false,
        beerData: null,
        default: 'Please wait'
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
                backgroundColor: 'yellow'
            }
        }
        console.log(this.state.beerData)

        const beerList = (
            this.state.beerData
            &&
            this.state.beerData
            .map(el =>(
     
                el
            
            ))
        )
        const mapedBeerList = (
            beerList
            &&
            beerList.map(el =>(
                <Beer 
                    beer={el}
                    key={el.product_id}
                />
            ) )
        )
        console.log(beerList)

        return (
            <MyPaper>
                {
                    this.state.isLoadingBeerList ?
                        <Loading />
                        :
                        <List>
                        {mapedBeerList}
                        </List>
                }
            </MyPaper>
        )
    }
}
export default BeerList