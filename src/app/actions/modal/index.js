export const setModalVisible = function(visible) {
  return {
    type: 'SET_MODAL_VISIBLE',
    visible
  }
}

export const setEditModal = function() {
  return {
    type: 'SET_EDIT_MODAL'
  }
}
