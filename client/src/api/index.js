import { createApi } from '../utils/api'

const apiUrl = 'http://localhost:5000/api'

const filesApi = createApi(apiUrl)

export const createFiles = filesApi('/files', 'POST')
export const updateFiles = filesApi('/files', 'PATCH')
export const getFiles = filesApi('/files', 'GET')
export const deleteFiles = filesApi('/trash', 'DELETE')
