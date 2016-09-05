import { push } from 'react-router-redux'
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

export const createPage = (values) => (
  // redux-thunk makes can access to dispath
  dispatch =>
    dispatch({
      [CALL_API]: {
        endpoint: API_ENDPOINT.PAGES_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
        types: [
          ACTION_TYPES.CREATE_PAGE_REQUEST,
          {
            // This way for custom of redux-api-middleware
            type: ACTION_TYPES.CREATE_PAGE_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then(page => {
                console.log('Create Success', page);
                dispatch(push(`/pages/${page.id}`))
                return page
              })
            }
          },
          ACTION_TYPES.CREATE_PAGE_FAILURE
        ]
      }
    })
)
