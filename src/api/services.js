import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/'

export function fetchList (resource) {
  return axios.get(`${URL}${resource}`)
}
