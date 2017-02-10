import React from 'react'
import './style.scss'

class LogLine extends React.Component {
  render() {
    return (
       <li className="log-line">$ {this.props.text}</li>
    )
  }
}

module.exports = LogLine