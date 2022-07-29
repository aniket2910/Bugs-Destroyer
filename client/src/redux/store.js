
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { loginReducer } from './auth/Login/reducer';
import { signupReducer } from './auth/signup/reducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer, enhancer)