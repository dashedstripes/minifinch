import React from 'react'
import { connect } from 'react-redux'
import { setFilters } from '../../actions/filters'
import FilterOption from '../FilterOption'

class FilterContainer extends React.Component {
  constructor(props) {
    super(props)
    const filters = [
      {
        id: 1,
        enabled: false,
        name: 'Ticket Forms',
        slug: 'ticket_forms'
      },
      {
        id: 2,
        enabled: false,
        name: 'Ticket fields',
        slug: 'ticket_fields'
      },
      {
        id: 3,
        enabled: false,
        name: 'Groups',
        slug: 'groups'
      },
      {
        id: 4,
        enabled: false,
        name: 'User fields',
        slug: 'user_fields'
      },
      {
        id: 5,
        enabled: false,
        name: 'Organization fields',
        slug: 'organization_fields'
      },
      {
        id: 6,
        enabled: false,
        name: 'Organizations',
        slug: 'organizations'
      }
    ]
    this.props.dispatch(setFilters(filters))
  }
  render() {
    return (
       <div>
         <h5>Filters</h5>
         <br/>
         <div className="row">
          {this.props.filters.map((filter, index) => {
              return (
                <div key={filter.id} className="col-md-6">
                  <FilterOption id={filter.id} name={filter.name} enabled={filter.enabled} />
                </div>
              )
          })}
         </div>
       </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

module.exports = connect(mapStateToProps)(FilterContainer)