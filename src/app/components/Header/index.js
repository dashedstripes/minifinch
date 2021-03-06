import React from 'react'
import {IndexLink} from 'react-router'
import './style.scss'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-minifinch navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink className="navbar-brand" to="/">Minifinch</IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Log out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = Header