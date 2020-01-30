import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import HomeRoute from './views/home/HomeRoute'
import ProductRoute from './views/products/ProductRoute'
import AppHeader from './components/AppHeader'
import AuthRoute from './views/auth/AuthRoute'
import { fetchCurrentUser } from './actions/auth'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchCurrentUser())
  }

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

export default withRouter(connect()(App))
