import {
  updateBegin,
  updateDone,
  updateFailed
} from '../action-creators/updateFile'

import { deleteFiles } from '../api'

export const deleteFile = () => (dispatch, getState) => {
  dispatch(updateBegin())
  const { fileObjects, currentSelection } = getState().trash
  const request = [fileObjects[currentSelection]]
  deleteFiles(request, dispatch, updateDone, updateFailed)
}
