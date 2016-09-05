import React from 'react'
import {Link} from 'react-router'
import styles from './Header.scss'
import FlashMessage from '../Loading/FlashMessage'

const Header = () => {
  return (
    <div>
      <header className={styles['header']}>
        <nav>
          <Link
            to={{pathname: '/'}}
            className={styles['brand']}
            >
            Black Sheep Coder
          </Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link
                to={{pathname: '/pages'}}
                className={styles['menu__link']}>
                All Pages
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <Link
                to={{pathname: '/griddle'}}
                className={styles['menu__link']}>
                Griddle
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <a
                href='#'
                className={styles['menu__link']}>
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <br />
      <FlashMessage loading={true} />

    </div>
  )
}

export default Header
