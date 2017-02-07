import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import style from './style.scss'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'
import Header from './components/Header'
import Main from './components/Main'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Main}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'))