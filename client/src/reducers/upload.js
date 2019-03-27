import {
  SET_UPLOAD_FILES,
  UPLOAD_BEGIN,
  UPLOAD_DONE,
  UPLOAD_FAILED
} from '../action-types/index'

const uploadInitialState = {
  files: [],
  errorMessage: '',
  error: false,
  uploading: false
}

export default function uploadReducer (state = uploadInitialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPLOAD_BEGIN:
      return {
        ...state,
        error: false,
        errorMessage: '',
        uploading: true
      }
    case UPLOAD_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: payload,
        uploading: false
      }
    case UPLOAD_DONE:
      return {
        ...state,
        uploading: false,
        files: payload,
        error: false
      }
    case SET_UPLOAD_FILES:
      return {
        ...state,
        files: payload
      }
    default:
      return state
  }
}
