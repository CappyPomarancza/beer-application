import React from 'react';
import BeerList from './BeerApp/BeerList'
import SimpleAppBar from './SimpleAppBar'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
      <SimpleAppBar/>
     <BeerList />
      </div>
    )
  }
}

export default App
