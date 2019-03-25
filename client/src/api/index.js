import { createApi } from '../utils/api'

const apiUrl = 'http://localhost:5000/api'

const filesApi = createApi(apiUrl)

export const createFiles = filesApi('/files', 'POST')

export const getFiles = filesApi('/files', 'GET')
