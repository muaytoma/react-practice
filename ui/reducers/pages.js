import {ACTION_TYPES} from '../constants'

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_PAGES_SUCCESS:
      return action.payload
    case ACTION_TYPES.LOAD_PAGE_SUCCESS:
      /**
       * symbol [] wapper because
       * pages find callback function is works
       
       * This way makes all pages data lost.
       */
      return [action.payload]
    default:
      return state
  }
}

export const getPageById = (state, id) => {
  return (
    state.pages.find( page => page.id === +id || {title:'', content: ''})
  )
}
