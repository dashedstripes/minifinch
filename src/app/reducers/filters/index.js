import _ from 'underscore'

const filters = function(state = [], action) {
  switch (action.type) {
    case 'SET_FILTERS':
      return Object.assign([], state, action.payload)
    case 'ENABLE_FILTER':
      return setEnabled(state, action.id, true)
    case 'DISABLE_FILTER':
      return setEnabled(state, action.id, false)
  }
  return state
}

function setEnabled(state, id, val) {
  let filters = Object.assign([], state)
  filters.map((filter) => {
    if(filter.id == id) {
      filter.enabled = val
    }
  })
  return filters
}

export default filters