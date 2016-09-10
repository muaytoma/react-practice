import React, { PropTypes } from 'react'

const Loading = ({loadingText}) => (
  <div className="loading">{loadingText}</div>
)

Loading.defaultProps = {
  loadingText: 'Loading'
}

Loading.propTypes = {
  loadingText: PropTypes.string
}

export default Loading
