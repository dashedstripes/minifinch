import { createStore } from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer, {
  accounts: [
    {
      id: Date.now(),
      name: 'Skycab',
      subdomain: 'skycab',
      email: 'admin@skycab.me',
      token: '8f02kg74ysg97g'
    },
    {
      id: Date.now(),
      name: 'Minifinch Demo',
      subdomain: 'minifinchdemo',
      email: 'admin@minifinchdemo.me',
      token: '9gj2rgh08hgr08ing'
    }
  ]
})

store.subscribe(() => {
  // console.log(store.getState())
})

module.exports = store