export const setAccounts = function(payload) {
  return {
    type: 'SET_ACCOUNTS',
    payload
  }
}

export const newAccount = function(payload) {
  return {
    type: 'NEW_ACCOUNT',
    payload
  }
}

export const updateAccount = function(payload) {
  return {
    type: 'UPDATE_ACCOUNT',
    payload
  }
}