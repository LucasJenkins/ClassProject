import { createStore } from 'redux'
import composeEnhancers from '../middleware'

import { combineReducers } from 'redux'

import routeReducer from './routes'

const createReducer = () => {
  return combineReducers({
    route: routeReducer
  })
}

export default function configureStore (initialState = {}, history) {
  return createStore(createReducer(), initialState, composeEnhancers(history))
}
