import React, {Component} from 'react'
import styles from './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <h2 className={styles['title']}>
        Welcome to PintoCoder Wiki!
      </h2>
    )
  }
}
