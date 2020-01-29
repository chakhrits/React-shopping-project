import firebase from '../../firebase'
import { createActionSet } from '../../helpers'
import { push } from 'connected-react-router'

const { auth } = firebase

export const USER_SESSION = createActionSet('USER_SESSION')

export const login = (email, password) => async dispatch => {
  dispatch({
    type: USER_SESSION.PENDING
  })
  try {
    const response = await auth.signInWithEmailAndPassword(email, password)
    const { user } = response
    const currentUser = {
      email: user.email,
      name: user.displayName
    }
    dispatch({
      type: USER_SESSION.SUCCESS,
      payload: currentUser
    })

    localStorage.setItem('currentUser', currentUser)

    dispatch(push('/'))
  } catch (error) {
    dispatch({
      type: USER_SESSION.FAILED,
      error
    })
  }
}
