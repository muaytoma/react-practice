import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {PagesContainer, ShowPageContainer} from './containers'
import {App, Home} from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <route path='/pages'>
          <IndexRoute component={PagesContainer} />
          <route path=':id' component={ShowPageContainer} />
        </route>
      </Route>
    </Router>
  )
}
