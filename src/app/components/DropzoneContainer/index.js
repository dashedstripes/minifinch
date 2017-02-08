import React from 'react'
import Dropzone from '../Dropzone'

class DropzoneContainer extends React.Component {
  render() {
    return (
       <div>
         <div className="row">
           <div className="col-md-6">
             <Dropzone title="Source" type="source"/>
           </div>
           <div className="col-md-6">
             <Dropzone title="Destination" type="destination"/>
           </div>
         </div>
       </div>
    )
  }
}

module.exports = DropzoneContainer