import _ from 'underscore'

const accounts = function(state = [], action) {
  switch (action.type) {
    case 'SET_ACCOUNTS':
      return Object.assign([], state, action.payload)
    case 'NEW_ACCOUNT':
      let newAccountArray = Object.assign([], state)
      let newAccount = action.payload
      newAccount.id = Date.now()
      newAccount.selected = false
      newAccountArray.push(newAccount)
      return newAccountArray
    case 'UPDATE_ACCOUNT':
      let updateAccount = Object.assign([], state)
      updateAccount.forEach((account, index) => {
        if(account.id == action.payload.id) {
          updateAccount[index] = action.payload
        }
      })
      return updateAccount
  }
  return state
}

export default accounts