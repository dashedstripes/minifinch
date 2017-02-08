import React from 'react'
import { connect } from 'react-redux'
import { setModalVisible, setEditModal } from '../../actions/modal'
import { setCurrentAccount } from '../../actions/currentAccount'
import './style.scss'

class AccountPill extends React.Component {
  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(setCurrentAccount(this.props.account))
    this.props.dispatch(setModalVisible(true))
    this.props.dispatch(setEditModal())
  }

  dragStart(e) {
    this.props.dispatch(setCurrentAccount(this.props.account))
  }
  
  render() {
    return (
       <li className="account-pill-item">
         <button className="btn btn-default account-pill" draggable="true" onDragStart={this.dragStart.bind(this)} onClick={this.handleClick.bind(this)}>
           {this.props.account.name}
         </button>
       </li>
    )
  }
}

module.exports = connect()(AccountPill)