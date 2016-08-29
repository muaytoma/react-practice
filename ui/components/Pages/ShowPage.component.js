import React, {PropTypes} from 'react'

const ShowPage = ({title, content}) => (
  <article>
    <h1>{title}</h1>
    <p>{content}</p>
  </article>
)

ShowPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default ShowPage
