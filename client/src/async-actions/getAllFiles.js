import {
  startLoading,
  doneLoading,
  setErrorMessage
} from '../action-creators/home'
import { getFiles } from '../api'

export const getAllFiles = () => (dispatch, getState) => {
  dispatch(startLoading())
  const { currentFolder } = getState().home
  getFiles(currentFolder, dispatch, doneLoading, setErrorMessage)
}

export default getAllFiles
