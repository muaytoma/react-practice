import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {Pages} from '../components'

export default class PagesContainer extends Component {

  // Default State
  state = {
    pages: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/api/v1/pages')
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
