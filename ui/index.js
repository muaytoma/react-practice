import React,  {Component} from 'react'
import {render} from 'react-dom'
import styles from './styles.scss'

export default class HelloWorld extends Component {
  render() {
    let {fullName, birthDate} = this.props
    return (
      <div>
        <h1 className={styles.greeting}>My name is {fullName}</h1>
        <time dateTime={birthDate.toISOString()}>
          {birthDate.toLocaleDateString()}
        </time>
      </div>
    )
  }
}

render(<HelloWorld fullName="Kitti Boonchan" birthDate={new Date()} />, document.getElementById('app'))
