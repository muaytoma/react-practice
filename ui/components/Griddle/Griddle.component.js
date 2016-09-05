import React from 'react'
import Griddle from 'griddle-react'
import styles from './Griddle.scss'

const GriddleComponent = (props) => {
  const fakeData = [{
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  }]
  return (
    <Griddle results={fakeData} />
  )
}

export default GriddleComponent
