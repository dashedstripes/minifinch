import React from 'react'
import './style.scss'

class NewAccountButton extends React.Component {
  render() {
    return (
       <button className="btn btn-primary new-account-button">
         New Account
       </button>
    )
  }
}

module.exports = NewAccountButton