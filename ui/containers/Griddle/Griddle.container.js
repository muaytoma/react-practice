import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {GriddleComponent} from '../../components'

class GriddleContainer extends Component {

  static propTypes = {
  }

  render() {
    return (
      <GriddleComponent />
    )
  }

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GriddleContainer)
