import {
  UPDATE_BEGIN,
  UPDATE_DONE,
  UPDATE_FAILED,
  SET_UPDATE_FILES
} from '../action-types/index'
import { createAction } from '../utils/redux'

export const setUpdateFiles = fileObjects =>
  createAction(SET_UPDATE_FILES, fileObjects)

export const updateBegin = () => createAction(UPDATE_BEGIN)

export const updateDone = () => createAction(UPDATE_DONE)

export const updateFailed = message => createAction(UPDATE_FAILED, message)
