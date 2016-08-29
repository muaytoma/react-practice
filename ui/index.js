import React,  {Component} from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'

const rootEl = document.getElementById('app')

render(
  /**
   * Wrapper the Root component in AppContainer
   * Cause all subcomponents of Root has HRM quality
   */
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
)

/**
 * Whenever, subcomponents has change or update
 * make HMR with new Root (NextRootApp)
 */
if(module.hot) {
  console.log('HMR');
  module.hot.accept('./containers/Root', () => {
    const NextRootApp = require('./containers/Root').default

    render(
      <AppContainer>
        <NextRootApp />
      </AppContainer>,
      rootEl
    )
  })
}
