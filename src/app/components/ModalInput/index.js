import React from 'react'
import { connect } from 'react-redux'
import { updateCurrentAccount } from '../../actions/currentAccount'

class ModalInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
    this.props.dispatch(updateCurrentAccount({
      name: this.props.name.toLowerCase(),
      value: e.target.value
    }))
  }
  
  render() {
    return (
       <div>
        <label>{this.props.name}</label>
        <br/>
        <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange.bind(this)}/>
       </div>
    )
  }
}

module.exports = connect()(ModalInput)