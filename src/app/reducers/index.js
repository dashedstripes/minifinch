import { combineReducers } from 'redux'
import filters from './filters'
import modal from './modal'
import accounts from './accounts'
import currentAccount from './currentAccount'

const rootReducer = combineReducers({
  filters,
  modal,
  accounts,
  currentAccount
})

export default rootReducer