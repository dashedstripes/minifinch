import _ from 'underscore'

const process = function(state = {}, action) {
  switch (action.type) {
    case 'SET_PROCESS_ACCOUNT':
      let processAccount = Object.assign({}, state)
      processAccount[action.payload.type] = action.payload.account
      return processAccount
  }
  return state
}

export default process