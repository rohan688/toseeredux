import { combineReducers, createStore } from "redux";
import { loginReducer } from "./Login/reducer";
import { signupreducer } from "./Signup/reducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupreducer
});

export const store = createStore(rootReducer)