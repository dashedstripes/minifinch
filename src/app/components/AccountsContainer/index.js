import React from 'react'
import { connect } from 'react-redux'
import { setAccounts } from '../../actions/accounts'
import AccountPill from '../AccountPill'
import NewAccountButton from '../NewAccountButton'
import './style.scss'

class AccountsContainer extends React.Component {
  constructor(props) {
    super(props)
    fetch('http://localhost:3030/api/accounts').then((res) => {
      return res.json()
    }).then((accounts) => {
      this.props.dispatch(setAccounts(accounts))
    })
  }
  
  render() {
    return (
       <div>
         <h4>Accounts</h4>
         <hr/>
         <ul className="nav nav-pills nav-stacked accounts-container">
           {this.props.accounts.map((account, index) => {
             return (
               <AccountPill key={index} account={account} />
             )
           })}
         </ul>
         <NewAccountButton/>
       </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

module.exports = connect(mapStateToProps)(AccountsContainer)