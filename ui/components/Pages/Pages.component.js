import React, {PropTypes} from 'react'
import Page from '../Page/Page'
import {Link} from 'react-router'

const PagesList = ({pages, onReloadPages}) => {
  return (
    <div>
      <button className='button' onClick={() => onReloadPages()}>
        Reload Pages
      </button>
      <Link to={{ pathname: '/pages/new' }}>Create New Page</Link>
      <hr />
      <table className='table'>
        <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              pages.map((page) => {
                return (
                  <Page
                  key={page.id}
                  id={page.id}
                  title={page.title} />
                )
              })
            }
          </tbody>
      </table>
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
  onReloadPages: PropTypes.func.isRequired
}

export default PagesList
