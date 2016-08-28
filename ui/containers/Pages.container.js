import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {Pages} from '../components'
import {API_ENDPOINT} from '../constants'

export default class PagesContainer extends Component {

  // Default State
  state = {
    pages: []
  }

  onReloadPages = () => {
    fetch(API_ENDPOINT.PAGES_ENDPOINT)
      .then((response) => response.json())
      .then(pages => (this.setState({pages})))
  }

  componentDidMount() {
    this.onReloadPages()
  }

  render() {
    let {pages} = this.state
    return (
      <div>
        <Pages pages={pages} onReloadPages={this.onReloadPages} />
      </div>
    )
  }

}
