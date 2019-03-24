import { createStore, combineReducers } from 'redux'
import composeEnhancers from '../middleware'

import routeReducer from './routes'
import uploadReducer from './upload'

const createReducer = () => {
  return combineReducers({
    route: routeReducer,
    upload: uploadReducer
  })
}

export default function configureStore (initialState = {}, history) {
  return createStore(createReducer(), initialState, composeEnhancers(history))
}
