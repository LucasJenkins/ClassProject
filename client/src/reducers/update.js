import {
  SET_UPDATE_FILES,
  UPDATE_BEGIN,
  UPDATE_DONE,
  UPDATE_FAILED
} from '../action-types/index'

const updateInitialState = {
  fileObjects: [],
  currentSelection: 0,
  errorMessage: '',
  error: false
}

export default function updateReducer (state = updateInitialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_BEGIN:
      return {
        ...state,
        error: false,
        errorMessage: ''
      }
    case UPDATE_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: payload
      }
    case UPDATE_DONE:
      return {
        ...state,
        fileObjects: []
      }
    case SET_UPDATE_FILES:
      return {
        ...state,
        fileObjects: payload
      }
    default:
      return state
  }
}
