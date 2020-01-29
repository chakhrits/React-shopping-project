import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'

import products from './products'

export default history =>
  combineReducers({
    router: connectRouter(history),
    form,
    products
  })
