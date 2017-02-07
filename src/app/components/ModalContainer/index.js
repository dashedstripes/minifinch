import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
import { setModalVisible } from '../../actions/modal'

class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.dispatch(setModalVisible(false))
  }

  render() {
    return (
       <Modal visible={this.props.modal.visible} type={this.props.modal.type} account={this.props.currentAccount}/>
    )
  }
}

function mapStateToProps(state) {
  return state
}

module.exports = connect(mapStateToProps)(ModalContainer)