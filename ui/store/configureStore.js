import {createStore} from 'redux'
import rootReducer from '../reducers'


const promise = (store) => {
  const next = store.dispatch
  return (action) => {
    if(typeof action.then === 'function')
      return action.then(next)
    return next(action)
  }
}

export default () => {
  const store = createStore(rootReducer)

  store.dispatch = promise(store)

  if(module.hot) {
    /**
     * Whenever reducer have HMR
     * webpack will HMR specifically reducer which changed
     * by current state (other reducers) still remain
     */
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
