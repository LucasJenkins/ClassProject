import * as types from '../action types/index'

const uploadinitialState = {
    name:'',
    errormessage:'',
    errorUploadingFile: false
  }

  const downloadinitialState = {
  }
  const trashinitialState = {
  }
  const deleteinitialState = {
  }
  const updateinitialState = {
  }
  
  export default function uploadFile (state = uploadinitialState, action) {
    const {type,payload} = action
    switch (type) {
        case types.UPLOAD_BEGIN:
          return {
            ...state,
            errorUploadingFile: false
          }
          case types.UPLOAD_FAILED:
          return {
            ...state,
            errorUploadingFile: true
          }
          case types.UPLOAD_DONE:
          return {
            ...state,
            errorUploadingFile: false
          }
          case types.GET_FILENAME:
          return {
            ...state,
            name: payload,
            errorUploadingFile: false
          }
          default:
          return state
        }
   }

  export default function downloadFile (state = downloadinitialState, action) {
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
  }
