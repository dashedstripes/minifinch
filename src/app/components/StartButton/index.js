import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

class StartButton extends React.Component {
  handleClick(e) {
    fetch('http://localhost:5000/api/minifinch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accounts: {
          a: this.props.process.source,
          b: this.props.process.destination
        },
        filters: this.props.filters
      })
    })
  }

  render() {
    return (
       <button className="btn btn-primary start-button" onClick={this.handleClick.bind(this)}>Start</button>
    )
  }
}

function mapStateToProps(state) {
  return state
}

module.exports = connect(mapStateToProps)(StartButton)