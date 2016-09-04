import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {getPageById} from '../../reducers/pages'
import {ShowPage} from '../../components'
import {loadPage} from '../../actions'

class ShowPageContainer extends Component {

  static propTypes = {
    page: PropTypes.object.isRequired,
    onLoadPage: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.page !== nextProps.page
  }

  // occurred component rendered
  componentDidMount() {
    const { onLoadPage, params: {id}} = this.props
    onLoadPage(id)
  }

  render() {
    const {id, title, content} = this.props.page
    return (
      <ShowPage id={id} title={title} content={content} />
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  page: getPageById(state, ownProps.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPage() {
    dispatch(loadPage())
  }
})

export default connect(
  mapStateToProps,
  { onLoadPage: loadPage }
  // mapDispatchToProps
)(ShowPageContainer)
