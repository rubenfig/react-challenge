import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import publicationReducer from '../reducers/publication'
import authorReducer from '../reducers/author'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  return createStore(
    combineReducers({
      publication: publicationReducer,
      author: authorReducer
    }),
    composeEnhancers(applyMiddleware(thunk, logger))
  )
}



