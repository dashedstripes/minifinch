import React from 'react'
import DropzoneContainer from '../DropzoneContainer'
import FilterContainer from '../FilterContainer'
import LogContainer from '../LogContainer'

class ProcessArea extends React.Component {
  render() {
    return (
       <div>
         <DropzoneContainer/>
         <hr/>
         <div className="row">
           <div className="col-md-6">
             <FilterContainer/>
           </div>
           <div className="col-md-6">
             <LogContainer/>
           </div>
         </div>
       </div>
    )
  }
}

module.exports = ProcessArea