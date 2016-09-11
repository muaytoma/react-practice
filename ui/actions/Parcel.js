import { CALL_API } from 'redux-api-middleware'
import {API_ENDPOINT, ACTION_TYPES} from '../constants'

export const loadParcels = (page = 0, parcelSetId = 48) => ({
  [CALL_API]: {
    endpoint: `${API_ENDPOINT.ADMIN_GET_PARCELS}/${parcelSetId}?page=${page}`,
    headers: {
      'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lcklkIjoiMSIsIm93bmVyVHlwZSI6IkFETUlOIiwiaWF0IjoxNDYzNTY5OTYxLCJhdWQiOiJzZW5kaXQuYXNpYSIsImlzcyI6InNlbGYifQ.tIirQdhVDnfTEYmpsM_wVZEn5vK1lpXhuPlt1soxaNs'
    },
    method: 'GET',
    types: [
      ACTION_TYPES.LOAD_PARCELS_REQUEST,
      ACTION_TYPES.LOAD_PARCELS_SUCCESS,
      ACTION_TYPES.LOAD_PARCELS_FAILURE
    ]
  }
})
