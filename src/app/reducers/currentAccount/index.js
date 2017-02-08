import _ from 'underscore'

const accounts = function(state = {}, action) {
  switch (action.type) {
    case 'SET_CURRENT_ACCOUNT':
      return Object.assign({}, state, action.payload)
    case 'EMPTY_CURRENT_ACCCOUNT':
      return {
        name: '',
        subdomain: '',
        email: '',
        token: ''
      }
  }
  return state
}

export default accounts