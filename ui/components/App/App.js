import React, {Component} from 'react'
import Header from './Header'
import styles from './App.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        // container Global-css from elements.scss
        <div className='container'>
          // content Local-css from App.csss
          <div className={styles['content']}>
            {this.props.children}
          </div>
        </div>
      </div>    )
  }
}
