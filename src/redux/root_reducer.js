import {combineReducers} from 'redux'
import userReducer from './user_reducer/user.reducer'
import CartReducer from './cart_reducer/cart_reducer'
export default combineReducers({
    user: userReducer,
    cart: CartReducer
})