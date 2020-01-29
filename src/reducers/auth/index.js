import { USER_SESSION } from '../../actions/auth'

export const initialState = {
  isFetching: false,
  error: null,
  currentUser: {},
  isAuthenticated: false
}

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case USER_SESSION.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case USER_SESSION.SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: payload,
        isAuthenticated: true
      }
    case USER_SESSION.FAILED:
      return {
        ...state,
        isFetching: false,
        error,
        currentUser: {},
        isAuthenticated: false
      }
    default:
      return state
  }
}
