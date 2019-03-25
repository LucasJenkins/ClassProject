import { fetch } from 'whatwg-fetch'

export const createApi = url => (endpoint, method) => (
  request,
  dispatch,
  resolve,
  reject
) => {
  fetch(url + endpoint, {
    method: method,
    ...bodyIfAllowed(method, request),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        response.json().then(body => dispatch(resolve(body)))
      } else {
        response.json().then(({ Description }) => dispatch(reject(Description)))
      }
    })
    .catch(e => console.log(e.message))
}

const bodyIfAllowed = (method, request) =>
  method !== 'GET' ? { body: JSON.stringify(request) } : {}
