import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {Pages} from '../../components'
import {loadPages} from '../../actions'

class PagesContainer extends Component {

  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages
  }

  onReloadPages = () => {
    this.props.onLoadPages()
  }

  componentDidMount() {
    this.onReloadPages()
  }

  render() {
    let {pages} = this.props
    return (
      <Pages pages={pages} onReloadPages={this.onReloadPages} />
    )
  }
}

const mapStateToProps = (state) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    /**
     * Call dispath for execute reducer
     * loadPages function will return promise from isomorphic-fetch API data
     * need to improve redux dispatch can work with promise
     */
    dispatch(loadPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)
