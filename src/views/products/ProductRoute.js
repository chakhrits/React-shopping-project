import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductDetail from './ProductDetail'
import ProductList from './ProductList'
import AuthRoute from '../../components/AuthRoute'

export default () => (
  <Switch>
    <Route exact path="/products" component={AuthRoute(ProductList)} />
    <Route exact path="/products/:id" component={ProductDetail} />
  </Switch>
)
