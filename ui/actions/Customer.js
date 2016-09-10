import { push } from 'react-router-redux'
import { CALL_API } from 'redux-api-middleware'
import {API_ENDPOINT, ACTION_TYPES} from '../constants'

export const loadCustomers = (page) => {

  return ({
    /**
     * Redux API Middleware.
     */
     [CALL_API]: {
       endpoint: `${API_ENDPOINT.CUSTOMERS_ENDPOINT}?_page=${page}`,
       method: 'GET',
       types: [
         ACTION_TYPES.LOAD_CUSTOMERS_REQUEST,
         ACTION_TYPES.LOAD_CUSTOMERS_SUCCESS,
         ACTION_TYPES.LOAD_CUSTOMERS_FAILURE
       ]
     }
  })
}
