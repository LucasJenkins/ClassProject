import { createStore, combineReducers } from 'redux'
import composeEnhancers from '../middleware'

import routeReducer from './routes'
import fileReducer from './file'

const createReducer = () => {
  return combineReducers({
    route: routeReducer,
    file: fileReducer
  })
}

export default function configureStore (initialState = {}, history) {
  return createStore(createReducer(), initialState, composeEnhancers(history))
}
