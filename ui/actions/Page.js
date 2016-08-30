import fetch from 'isomorphic-fetch'
import {API_ENDPOINT} from '../constants'

const receivePages = (pages) => ({
  type: 'RECEIVE_PAGES',
  pages
})


export const loadPages = () => (
  fetch(API_ENDPOINT.PAGES_ENDPOINT)
    .then((response) => response.json())
    .then(pages => receivePages(pages))
)
