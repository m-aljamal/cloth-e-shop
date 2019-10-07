import {combineReducers} from 'redux'
import userReducer from './user_reducer/user.reducer'

export default combineReducers({
    user: userReducer
})