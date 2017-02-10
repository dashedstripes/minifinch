import React from 'react'
import LogLine from '../LogLine'
import socket from '../../services/socket'

class LogContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lines: []
    }
    socket.on('minifinch update', function(msg){
      let currentLines = this.state.lines
      currentLines.push({
        text: msg
      })
      this.setState({
        lines: currentLines
      })
    }.bind(this))
  }

  render() {
    return (
       <div>
         <h5>Log</h5>
         <br/>
         {this.state.lines.map(function(line, index) {
           return (
             <LogLine key={index} text={line.text}/>
           )
         })}
       </div>
    )
  }
}

module.exports = LogContainer