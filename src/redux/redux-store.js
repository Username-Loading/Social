import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";  
import ProfileReducer from './ProfileReducer'
import MessageReducer from './MessageReducer'
import NavBarReducer from './NavBarReducer'
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let redusers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagePage: MessageReducer,
    NavBarPage: NavBarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer
    

})

let store = createStore (redusers, applyMiddleware(thunkMiddleware))

export default store