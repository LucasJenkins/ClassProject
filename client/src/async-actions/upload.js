import {
  uploadBegin,
  uploadDone,
  uploadFailed
} from '../action-creators/upload'
import { getBase64String } from '../utils/file'
import { createFiles } from '../api'

export const upload = () => (dispatch, getState) => {
  dispatch(uploadBegin())
  const { files } = getState().upload
  let convertedFiles = []
  for (let file of files) {
    convertedFiles.push(
      getBase64String(file).then(encodedString => ({
        name: file.name,
        folderId: 0,
        isFolder: false,
        size: file.size,
        type: file.type,
        data: encodedString
      }))
    )
  }
  Promise.all(convertedFiles).then(request =>
    createFiles(request, dispatch, uploadDone, uploadFailed)
  )
}
