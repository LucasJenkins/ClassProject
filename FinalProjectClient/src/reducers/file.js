export const UPLOAD_BEGIN = 'UPLOAD_BEGIN'
export const UPLOAD_FAILED = 'UPLOAD_FAILED'
export const UPLOAD_DONE = 'UPLOAD_DONE'
export const GET_FILENAME = 'GET_FILENAME'

const initialState = {
    name:'',
    errorUploadingFile: false
  }
  
  export default function upload (state = initialState, action) {
    switch (type) {
        case UPLOAD_BEGIN:
          return {
            ...state,
            genres: payload,
            errorLoadingGenres: false
          }
          case UPLOAD_FAILED:
          return {
            ...state,
            genres: payload,
            errorLoadingGenres: false
          }
          case UPLOAD_DONE:
          return {
            ...state,
            genres: payload,
            errorLoadingGenres: false
          }
          case GET_FILENAME:
          return {
            ...state,
            genres: payload,
            errorLoadingGenres: false
          }
          default:
          return state
        }
   }