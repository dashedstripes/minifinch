import React from 'react'
import AccountsContainer from '../AccountsContainer'
import ProcessArea from '../ProcessArea'
import StartButton from '../StartButton'
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
              <div className="row">
                <div className="text-left col-md-6">
                  <h4>Process Area</h4>
                </div>
                <div className="text-right col-md-6">
                  <StartButton/>
                </div>
              </div>
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