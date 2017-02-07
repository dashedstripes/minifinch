import React from 'react'
import AccountsContainer from '../AccountsContainer'
import ProcessArea from '../ProcessArea'
import './style.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="mainapp">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <AccountsContainer/>
            </div>
            <div className="col-md-10">
              <h4>Process Area</h4>
              <hr/>
              <ProcessArea/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home