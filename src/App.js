import React, { Component } from 'react'
import HomeRoute from './views/home/HomeRoute'
import ProductRoute from './views/products/ProductRoute'
import AppHeader from './components/AppHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <HomeRoute />
        <ProductRoute />
      </div>
    )
  }
}

export default App
