import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

class StartButton extends React.Component {
  handleClick(e) {
    console.log(this.props)
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