import {
  SET_UPLOAD_FILES,
  UPLOAD_BEGIN,
  UPLOAD_DONE,
  UPLOAD_FAILED
} from '../action-types/index'

const initialState = {
  files: [],
  errorMessage: '',
  error: false,
  uploading: false
}

export default function uploadReducer (state = initialState, action) {
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
        files: []
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

/* export default function downloadFile (state = downloadinitialState, action) {
    const {type,payload} = action
  }

  export default function trashFile (state = trashinitialState, action) {
    const {type,payload} = action
  }

  export default function deleteFile (state = deleteinitialState, action) {
    const {type,payload} = action
  }

  export default function updateFile (state = updateinitialState, action) {
    const {type,payload} = action
  } */
