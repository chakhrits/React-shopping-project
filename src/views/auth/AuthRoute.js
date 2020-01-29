import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginForm from './LoginPage'

export default () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
  </Switch>
)
