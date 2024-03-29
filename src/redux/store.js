import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root_reducer'

const middlewares  = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
// the store will be passed to the index file to provider