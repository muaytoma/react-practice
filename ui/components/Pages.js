import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'

export default class Pages extends Component {

  state = {
    pages: []
  }

  // componentWillMount() {
  //   console.log('Pinto WillMount');
  // }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/api/v1/pages')
      .then((response) => response.json())
      .then((pages) => {
        console.log('DisMount', pages);
        this.setState({pages})
      })
  }

  render() {
    console.log('Pages Render', this.state);
    return (
      // table is Global-css
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
              this.state.pages.map((page) => {
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
    )
  }
}
