import _ from 'underscore'

const modal = function(state = {}, action) {
  switch (action.type) {
    case 'SET_MODAL_VISIBLE':
      let setModalVisible = Object.assign({}, state)
      setModalVisible.visible = action.visible
      return setModalVisible
    case 'SET_EDIT_MODAL':
      let setEditModal = Object.assign({}, state)
      setEditModal.type = 'edit'
      return setEditModal
  }
  return state
}


export default modal