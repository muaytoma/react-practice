import {ACTION_TYPES} from '../constants'

const initialCustomers = []

export default (state=initialCustomers, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_CUSTOMERS_SUCCESS:
      return action.payload
    default:
      return state
  }
}
