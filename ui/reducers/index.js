import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import { routerReducer } from 'react-router-redux'
import pages from './pages'
import parcelsData from './parcels'
import customers from './customers'

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  pages,
  parcelsData,
  customers
})
