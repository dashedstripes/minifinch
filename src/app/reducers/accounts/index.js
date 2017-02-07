import _ from 'underscore'

const accounts = function(state = [], action) {
  switch (action.type) {
    case 'SET_ACCOUNTS':
      return Object.assign([], state, action.payload)
  }
  return state
}

export default accounts