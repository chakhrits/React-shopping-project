import React, { Component } from 'react'
import HomeRoute from './views/home/HomeRoute'
import ProductRoute from './views/products/ProductRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeRoute />
        <ProductRoute />
      </div>
    )
  }
}

export default App
