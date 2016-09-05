import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {
  PagesContainer,
  ShowPageContainer,
  CreatePageContainer
} from './containers'
import {App, Home} from './components'

export default (store, history) => {
  return (
    <Router history={syncHistoryWithStore(history, store)}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <route path='/pages'>
          <IndexRoute component={PagesContainer} />
          <route path='new' component={CreatePageContainer} />
          <route path=':id' component={ShowPageContainer} />
        </route>
      </Route>
    </Router>
  )
}
