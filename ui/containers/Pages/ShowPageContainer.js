import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {API_ENDPOINT} from '../../constants'
import {ShowPage} from '../../components'

export default class ShowPageContainer extends Component {
  state = {
    page: {
      title: '',
      content: ''
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return this.state.props !== nextState.page
  }

  // occurred component rendered
  componentDidMount() {
    fetch(`${API_ENDPOINT.PAGES_ENDPOINT}/${this.props.params.id}`)
    .then((response) => response.json())
    .then(page => (this.setState({page})))
  }

  render() {
    const {id, title, content} = this.state.page
    return (
      <ShowPage id={id} title={title} content={content} />
    )
  }


}
