export const setFilters = function(payload) {
  return {
    type: 'SET_FILTERS',
    payload
  }
}

export const enableFilter = function(id) {
  return {
    type: 'ENABLE_FILTER',
    id   
  }
}

export const disableFilter = function(id) {
  return {
    type: 'DISABLE_FILTER',
    id   
  }
}