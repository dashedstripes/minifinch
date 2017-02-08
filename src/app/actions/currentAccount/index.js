export const setCurrentAccount = function(payload) {
  return {
    type: 'SET_CURRENT_ACCOUNT',
    payload
  }
}

export const emptyCurrentAccount = function() {
  return {
    type: 'EMPTY_CURRENT_ACCOUNT'
  }
}

export const updateCurrentAccount = function(payload) {
  return {
    type: 'UPDATE_CURRENT_ACCOUNT',
    payload
  }
}