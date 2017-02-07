import React from 'react'
import './style.scss'

class Dropzone extends React.Component {
  render() {
    return (
       <div className="jumbotron text-center dropzone">
         {this.props.title}
       </div>
    )
  }
}

module.exports = Dropzone