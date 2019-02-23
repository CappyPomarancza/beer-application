import React from 'react'

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
        const beersList =  this.state.beerList && this.state.beerList
        console.log(this.state.beersList)
        return (
            <div>
                {this.state.beerList}
            </div>
        )
    }
}

export default BeerList