import React from 'react'

class LogLine extends React.Component {
  render() {
    return (
       <li>{this.props.text}</li>
    )
  }
}

module.exports = LogLine