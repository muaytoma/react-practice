import { CALL_API } from 'redux-api-middleware'
import {API_ENDPOINT, ACTION_TYPES} from '../constants'

export const loadPages = () => ({
  /**
   * Redux API Middleware.
   */
   [CALL_API]: {
     endpoint: API_ENDPOINT.PAGES_ENDPOINT,
     method: 'GET',
     types: [
       ACTION_TYPES.LOAD_PAGES_REQUEST,
       ACTION_TYPES.LOAD_PAGES_SUCCESS,
       ACTION_TYPES.LOAD_PAGES_FAILURE
     ]
   }
})

export const loadPage = (id) => ({
  /**
   * Redux API Middleware.
   */
   [CALL_API]: {
     endpoint: `${API_ENDPOINT.PAGES_ENDPOINT}/${id}`,
     method: 'GET',
     types: [
       ACTION_TYPES.LOAD_PAGE_REQUEST,
       ACTION_TYPES.LOAD_PAGE_SUCCESS,
       ACTION_TYPES.LOAD_PAGE_FAILURE
     ]
   }
})
