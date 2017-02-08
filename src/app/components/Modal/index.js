import React from 'react'
import { connect } from 'react-redux'
import { setModalVisible } from '../../actions/modal'
import ModalInput from '../ModalInput'
import './style.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSave(e) {
    console.log(this.props.account)
  }

  handleClose(e) {
    this.props.dispatch(setModalVisible(false))
  }
  
  render() {
    if(this.props.visible) {
      return (
        <div className="modal show in">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close" onClick={this.handleClose.bind(this)} aria-label="Close"><span aria-hidden="true">&times;</span></button>
                {this.props.type == 'edit' &&
                  <h4 className="modal-title">{this.props.account.name}</h4>
                }
                {this.props.type == 'new' &&
                  <h4 className="modal-title">New Account</h4>
                }                
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group">
                      <ModalInput id={this.props.account.id} name="Name" value={this.props.account.name}/>
                    </div>
                    <br/>
                    <div className="input-group">
                      <ModalInput id={this.props.account.id} name="Subdomain" value={this.props.account.subdomain}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <ModalInput id={this.props.account.id} name="Email" value={this.props.account.email}/>
                    </div>
                    <br/>
                    <div className="input-group">
                      <ModalInput id={this.props.account.id} name="Token" value={this.props.account.token}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.handleClose.bind(this)}>Close</button>
                {this.props.type == 'edit' &&
                  <button type="button" className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save changes</button>
                }
                {this.props.type == 'new' &&
                  <button type="button" className="btn btn-primary" onClick={this.handleSave.bind(this)}>Create account</button>
                }
              </div>
            </div>
          </div>
        </div>
      )
    }else {
      return null
    }
  }
}

module.exports = connect()(Modal)