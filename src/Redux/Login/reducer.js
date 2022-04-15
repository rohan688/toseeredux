import { LOGIN_FAILURE, LOGIN_SUCCESS,LOGIN_LOADING } from "./action";

const initistate = {
   loading:false,
   isAuthenticated:false,
   token:"",
   error:false
}

const loginReducer = (store = initistate, {type, payload})=>{
    switch (type) {
        case LOGIN_LOADING:    
           return {...store, loading:true};
        case LOGIN_SUCCESS:
            return {...store, loading:false, isAuthenticated:true, token:payload, error:false}
        case LOGIN_FAILURE:
            return{...store, loading:false, error:true, isAuthenticated:false}    
        default:
            return store;
    }
};

export {loginReducer};