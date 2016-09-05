import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import {createPage} from '../../actions'
import {PageForm} from '../../components'

const FIELDS = [ 'title', 'content']

class PagesContainer extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { fields, handleSubmit } = this.props
    return (
      <PageForm
        fields={fields}
        handleSubmit={handleSubmit} />
    )
  }
}

export default reduxForm({
    form: 'simple',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required'}, {})
  },
  // mapStateToProps
  (state) => ({}),
  // mapDispatchToProps
  (dispatch) => ({
    // onSubmit === handleSubmit of reduxForm
    onSubmit: values => dispatch(createPage(values))
  })
)(PagesContainer)
