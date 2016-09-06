import {ACTION_TYPES} from '../constants'

const initialParcels = {}

export default (state=initialParcels, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_PARCELS_SUCCESS:
      return action.payload
    default:
      return state
  }
}
