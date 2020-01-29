import React, { Component } from 'react'
import HomeRoute from './views/home/HomeRoute'
import ProductRoute from './views/products/ProductRoute'
import AppHeader from './components/AppHeader'
import AuthRoute from './views/auth/AuthRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AuthRoute />
        <HomeRoute />
        <ProductRoute />
      </div>
    )
  }
}

export default App
