import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer'
import shopReducer from './shop/shop.reducer'
import QuantityReducer from './cart/cart-reducer'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['']
}
export const rootReducer = combineReducers({
    user : userReducer,
    food : shopReducer,
    number : QuantityReducer

})
export default persistReducer(persistConfig, rootReducer);



