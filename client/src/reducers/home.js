import {
  SET_SELECTED_FILE,
  SET_FILE_LIST,
  SET_CURRENT_FOLDER,
  SET_ERROR_MESSAGE,
  START_LOADING,
  DONE_LOADING,
  SET_VIEW_MODE_GRID,
  SET_VIEW_MODE_LIST
} from '../action-types/index'

const initialState = {
  fileList: [],
  errorMessage: '',
  error: false,
  loading: false,
  viewMode: 'list'
}

export default function homeReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_SELECTED_FILE:
      return {
        ...state,
        selectedFile: payload
      }
    case SET_FILE_LIST:
      return {
        ...state,
        fileList: payload
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        error: true,
        errorMessage: payload
      }

    case SET_CURRENT_FOLDER:
      return {
        ...state,
        currentFolder: payload
      }

    case START_LOADING:
      return {
        ...state,
        error: false,
        errorMessage: '',
        loading: true
      }

    case DONE_LOADING:
      return {
        ...state,
        loading: false,
        fileList: payload
      }

    case SET_VIEW_MODE_GRID:
      return {
        ...state,
        viewMode: 'grid'
      }

    case SET_VIEW_MODE_LIST:
      return {
        ...state,
        viewMode: 'list'
      }

    default:
      return state
  }
}
