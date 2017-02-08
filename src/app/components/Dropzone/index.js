import React from 'react'
import { connect } from 'react-redux'
import { setProcessAccount } from '../../actions/process'
import './style.scss'

class Dropzone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: {}
    }
  }

  handleDragOver(e) {
    e.preventDefault()
    // $(e.target).addClass('dropzone-hover')
  }


  handleDrop(e) {
    // $(e.target).removeClass('dropzone-hover')
    this.setState({
      account: this.props.currentAccount
    })
    
    this.props.dispatch(setProcessAccount({
      type: this.props.type,
      account: this.props.currentAccount
    }))
  }
  
  render() {
    console.log(this.state.account)
    return (
       <div className="jumbotron text-center dropzone" onDrop={this.handleDrop.bind(this)} onDragOver={this.handleDragOver.bind(this)}>
         <p>{this.props.title}: {this.state.account.name}</p>
       </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

module.exports = connect(mapStateToProps)(Dropzone)