import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {apiMiddleware} from 'redux-api-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

/**
 * Notice:
 * Redux Middleware is overlap function
 * store => next => action
 */
// const thunk = (store) => (next) => (action) =>
//   typeof action === 'function' ?
//     action(store.dispatch, store.getState) : next(action)

export default () => {
  const middlewares = [thunk, apiMiddleware]

  /**
   * Redux-logger
   */
  if(process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if(module.hot) {
    /**
     * Whenever reducer have HMR
     * webpack will HMR specifically reducer which changed
     * by current state (other reducers) still remain
     */
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}
