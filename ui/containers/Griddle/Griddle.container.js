import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {GriddleComponent} from '../../components'
import {loadParcels} from '../../actions'


class GriddleContainer extends Component {

  static propTypes = {
    parcels: PropTypes.array.isRequired,
    onLoadParcels: PropTypes.func.isRequired
  }

  getInitialState = () => ({
    "results": [],
    "currentPage": 0,
    "maxPages": 0,
    "externalResultsPerPage": 5,
    "externalSortColumn":null,
    "externalSortAscending":true
  })

  // what page is currently viewed
  setPage = (index) => {}

  onReloadParcels = () => {
    this.props.onLoadParcels()
  }

  componentDidMount() {
    this.onReloadParcels()
  }

  render() {
    const initialState = this.getInitialState()
    const {parcels} = this.props
    return (
      <GriddleComponent initialState={initialState} />
    )
  }

}

const mapStateToProps = (state) => ({
  parcels: state.parcels
})

const mapDispatchToProps = (dispatch) => ({
  onLoadParcels() {
    dispatch(loadParcels())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GriddleContainer)
