import React from 'react'
import Header from '../Header'
import ModalContainer from '../ModalContainer'
import style from './style.scss'

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <ModalContainer/>
        <Header/>
        { this.props.children }
      </div>
    )
  }
}

module.exports = Layout