import React from 'react'
import { connect } from 'react-redux'
import { setAccounts } from '../../actions/accounts'
import AccountPill from '../AccountPill'
import NewAccountButton from '../NewAccountButton'
import './style.scss'

class AccountsContainer extends React.Component {
  constructor(props) {
    super(props)
    let accounts = [
        {
          id: 1,
          name: 'Skycab',
          subdomain: 'skycab',
          email: 'admin@skycab.me',
          token: '1234567890qwertyuiop',
          selected: false
        },
        {
          id: 2,
          name: 'SkyGaming',
          subdomain: 'skygaming',
          email: 'admin@skygaming.me',
          token: 'jf83mf01kfue7d56',
          selected: false
        }
      ]
    this.props.dispatch(setAccounts(accounts))
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