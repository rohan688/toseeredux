import {
    SIGNUP_SUCCESS,SIGNUP_ERROR,SIGNUP_LOADING
} from "./action"

const initiState = {
    loading:false,
    error:false,
    token:""
}

export const signupreducer =(store = initiState, {type, payload})=>{
    switch(type){
        case SIGNUP_LOADING:
            return {...store, loading:true}
        case SIGNUP_SUCCESS:
            return {...store, loading:false, error:false, token:payload}
        case SIGNUP_ERROR:
            return {...store, loading:false,error:true}
        default:
        return store;
    }
}