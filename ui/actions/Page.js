import { CALL_API } from 'redux-api-middleware'
import {API_ENDPOINT} from '../constants'

export const loadPages = () => ({
  /**
   * Redux API Middleware.
   */
   [CALL_API]: {
     endpoint: API_ENDPOINT.PAGES_ENDPOINT,
     method: 'GET',
     types: ['LOAD_PAGES_REQUEST', 'LOAD_PAGES_SUCCESS', 'LOAD_PAGES_FAILURE']
   }
})
