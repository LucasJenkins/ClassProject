import { fetch } from 'whatwg-fetch'

export const createApi = url => (endpoint, method) => (
  request,
  dispatch,
  resolve,
  reject
) => {
  const body = JSON.stringify(request)
  fetch(url + endpoint, {
    method: method,
    body,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': body.length.toString()
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
