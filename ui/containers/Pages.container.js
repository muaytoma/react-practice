import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {Pages} from '../components'
import {API_ENDPOINT} from '../constants'

export default class PagesContainer extends Component {

  // Default State
  state = {
    pages: []
  }

  componentDidMount() {
    fetch(API_ENDPOINT.PAGES_ENDPOINT)
      .then((response) => response.json())
      .then(pages => (this.setState({pages})))
  }

  render() {
    let {pages} = this.state
    return (
      <Pages pages={pages} />
    )
  }

}
