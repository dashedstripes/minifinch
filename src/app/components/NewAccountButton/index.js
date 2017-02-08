import React from 'react'
import { connect } from 'react-redux'
import { emptyCurrentAccount } from '../../actions/currentAccount'
import { setModalVisible, setNewModal } from '../../actions/modal'
import './style.scss'

class NewAccountButton extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(emptyCurrentAccount())
    this.props.dispatch(setModalVisible(true))
    this.props.dispatch(setNewModal())
  }
  
  render() {
    return (
       <button className="btn btn-primary new-account-button" onClick={this.handleClick.bind(this)}>
         New Account
       </button>
    )
  }
}

module.exports = connect()(NewAccountButton)