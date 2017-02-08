import { combineReducers } from 'redux'
import filters from './filters'
import modal from './modal'
import accounts from './accounts'
import currentAccount from './currentAccount'
import process from './process'

const rootReducer = combineReducers({
  filters,
  modal,
  accounts,
  currentAccount,
  process
})

export default rootReducer