import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductDetail from './ProductDetail'

export default () => (
  <Switch>
    <Route exact path="/products/:id" component={ProductDetail} />
  </Switch>
)
