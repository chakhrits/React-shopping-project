import { USER_SESSION, USER_REGISTER, USER_LOGOUT } from '../../actions/auth'

export const initialState = {
  isFetching: false,
  error: null,
  currentUser: {},
  isAuthenticated: false
}

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case USER_SESSION.PENDING:
    case USER_REGISTER.PENDING:
    case USER_LOGOUT.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case USER_SESSION.SUCCESS:
    case USER_REGISTER.SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: payload,
        isAuthenticated: true
      }
    case USER_SESSION.FAILED:
    case USER_REGISTER.FAILED:
    case USER_LOGOUT.SUCCESS:
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
