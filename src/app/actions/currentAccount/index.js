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