import React,  {PropTypes} from 'react'

const FlashMessage = (props) => {
  return (
    props.loading ? <h2>Loading..</h2> : <h3>FlashMessage...</h3>
  )
}

FlashMessage.propTypes = {
  loading: PropTypes.bool
}

export default FlashMessage
