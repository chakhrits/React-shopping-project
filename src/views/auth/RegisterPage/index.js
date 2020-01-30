import React from 'react'

import RegisterForm from '../components/AuthForm'
import { register } from '../../../actions/auth'

const handleSubmit = (values, dispatch) => {
  const { email, password } = values
  dispatch(register(email, password))
}

export default () => (
  <RegisterForm onSubmit={handleSubmit} title="Please Register" />
)
