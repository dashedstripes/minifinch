import React from 'react'
import './style.scss'

class Dropzone extends React.Component {
  handleDragOver(e) {
    e.preventDefault()
  }

  handleDrop(e) {
    console.log(e)
  }
  
  render() {
    return (
       <div className="jumbotron text-center dropzone" onDrop={this.handleDrop.bind(this)} onDragOver={this.handleDragOver.bind(this)}>
         {this.props.title}
       </div>
    )
  }
}

module.exports = Dropzone