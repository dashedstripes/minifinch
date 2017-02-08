import _ from 'underscore'

const accounts = function(state = {}, action) {
  switch (action.type) {
    case 'SET_CURRENT_ACCOUNT':
      return Object.assign({}, state, action.payload)
    case 'UPDATE_CURRENT_ACCOUNT':
      let updateCurrentAccount = Object.assign({}, state)
      updateCurrentAccount[action.payload.name] = action.payload.value
      return updateCurrentAccount
    case 'EMPTY_CURRENT_ACCOUNT':
      return {
        id: Date.now(),
        name: '',
        subdomain: '',
        email: '',
        token: '',
        selected: false
      }
  }
  return state
}

export default accounts