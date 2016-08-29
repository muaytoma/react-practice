const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PAGES':
      return actions.pages
    default:
      return state
  }
}
