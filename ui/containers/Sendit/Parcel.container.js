import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {GriddleComponent, Loading} from '../../components'
import Griddle from 'griddle-react'
import {loadParcels} from '../../actions'


class ParcelContainer extends Component {

  // getInitialState
  constructor(props) {
    super(props)
    this.state = {
      "results": [],
      "currentPage": 0,
      "maxPages": 0,
      "externalResultsPerPage": 10,
      "externalSortColumn":null,
      "externalSortAscending":true,
      "isLoading": true
    }
  }

  static propTypes = {
    parcelsData: PropTypes.object.isRequired,
    onLoadParcels: PropTypes.func.isRequired,
    enableInfiniteScroll: PropTypes.bool
  }

  // what page is currently viewed
  setPage = (index) => {
    console.log('Set Page..', index);
    index = index > this.state.maxPages ? this.state.maxPages : index < 1 ? 1 : index + 1;
    this.onLoadParcelsData(index);
  }

  setPageSize = (size) => {
  }

  onLoadParcelsData = (page = 1) => {
    this.setState({currentPage: page-1, isLoading: true})
    this.props.onLoadParcels(page);
  }

  componentDidMount() {
    this.onLoadParcelsData()
  }

  componentWillReceiveProps(props) {

    console.log('Will Receive', props);

    let newState = {
      maxPages: Math.round(props.parcelsData.data.totalParcel/10),
      isLoading: false
    };

    // A bit more logic might be needed here. More or less, Griddle will
    // only ever render what's being passed into it at any point.
    if (props.enableInfiniteScroll && this.state.results) {
      newState.results = this.state.results.concat(props.parcelsData.data.result);
    } else {
      newState.results = props.parcelsData.data.result;
    }

    this.setState(newState)
  }

  componentWillUpdate(props, state) {
    console.log('Will Update..');
  }

  render() {
    const {parcelsData, enableInfiniteScroll} = this.props
    const columnsName = [
      "parcelId", "parcelSetId"
    ]
    return (
      <Griddle useExternal={true} externalSetPage={this.setPage}
        enableSort={false} columns={columnsName}
        externalSetPageSize={this.setPageSize} externalMaxPage={this.state.maxPages}
        externalChangeSort={function(){}} externalSetFilter={function(){}}
        externalCurrentPage={this.state.currentPage} results={this.state.results}
        tableClassName="table" resultsPerPage={this.state.externalResultsPerPage}
        externalSortColumn={this.state.externalSortColumn} externalSortAscending={this.state.externalSortAscending}
        externalLoadingComponent={Loading} externalIsLoading={this.state.isLoading}
        enableInfiniteScroll={enableInfiniteScroll} bodyHeight={200} useFixedHeader={true} />
    )
  }

}

// getDefaultProps
ParcelContainer.defaultProps = { enableInfiniteScroll: true }

const mapStateToProps = (state) => ({
  parcelsData: state.parcelsData
})

const mapDispatchToProps = (dispatch) => ({
  onLoadParcels(page) {
    dispatch(loadParcels(page))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParcelContainer)
