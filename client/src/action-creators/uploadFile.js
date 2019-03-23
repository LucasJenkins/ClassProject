import * as types from '../action-types/index'
import {creatAction} from '../utils/redux'

export const getFilename = filename => (creatAction(types.GET_FILENAME,filename))

export const loadingFile = () => (creatAction(types.LOADING))
  
export const fileUploadSuccessful= () => (creatAction(types.UPLOAD_DONE))
  
export const fileUploadFailed = error => (creatAction(types.UPLOAD_FAILED,error))
  

