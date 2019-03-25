import {
  updateBegin,
  updateDone,
  updateFailed
} from '../action-creators/updateFile'
import { updateFiles } from '../api'

export const trash = () => (dispatch, getState) => {
  dispatch(updateBegin())
  const { fileObjects, currentSelection } = getState().update
  const request = [{ id: fileObjects[currentSelection].id, isTrash: true }]
  updateFiles(request, dispatch, updateDone, updateFailed)
}

export const untrash = () => (dispatch, getState) => {
  dispatch(updateBegin())
  const { fileObjects, currentSelection } = getState().update
  const request = [{ id: fileObjects[currentSelection].id, isTrash: false }]
  updateFiles(request, dispatch, updateDone, updateFailed)
}

export const rename = newName => (dispatch, getState) => {
  dispatch(updateBegin())
  const { fileObjects, currentSelection } = getState().home
  const request = [{ id: fileObjects[currentSelection].id, name: newName }]
  updateFiles(request, dispatch, updateDone, updateFailed)
}
