import React from 'react'
import {IndexLink} from 'react-router'

class NoMatch extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <h1>404</h1>
        <h2>Page not found</h2>
        <hr/>
        <IndexLink to="/">Back to app</IndexLink>
      </div>
    )
  }
}

module.exports = NoMatch