import { createApi } from '../utils/api'

const apiUrl = 'http://localhost:5000/api'

const filesApi = createApi(apiUrl)

export const createFiles = filesApi('/files', 'POST')
export const updateFiles = filesApi('/files', 'PATCH')
export const getFiles = filesApi('/files', 'GET')
export const getTrash = filesApi('/trash', 'GET')
export const downloadFile = id => filesApi(`/files/${id}/download`, 'GET')
export const deleteFiles = filesApi('/trash', 'DELETE')
