import React from 'react'
import { connect } from 'react-redux'
import { enableFilter, disableFilter } from '../../actions/filters'
import './style.scss'

class FilterOption extends React.Component {
  handleChange(e) {
    if(this.props.enabled) {
      this.props.dispatch(disableFilter(this.props.id))
    }else {
      this.props.dispatch(enableFilter(this.props.id))
    }
  }
  
  render() {
    return (
       <div className="filter-option">
         <input type="checkbox" name={this.props.name} checked={this.props.enabled} onChange={this.handleChange.bind(this)}/>
         <label htmlFor={this.props.name}>{this.props.name}</label>
       </div>
    )
  }
}

module.exports = connect()(FilterOption)