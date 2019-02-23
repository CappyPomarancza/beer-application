import React from 'react'
import BrewerList from './BrewerList';

class BeerList extends React.Component {
    state = {
        beerList: null
    }

    componentDidMount() {
        fetch("https://cors.io/?http://ontariobeerapi.ca/beers/")
            .then(response => response.json())
            .then(dataFromResponse =>
                this.setState({
                    beerList: JSON.stringify(dataFromResponse)
                })

            );
    }

    render() {
        const beersList = this.state.beerList && this.state.beerList
        console.log(this.state.beersList)
        return (

            <div>
                    <BrewerList/>

                
                <div className="left-container" >test left</div>
                <div className="center-container" >test center</div>
                <div className="rigth-container" >test right</div>
            </div>
        )
    }
}

export default BeerList