// ACTION TYPE
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_LOADING = "SIGNUP_LOADING"
export const SIGNUP_ERROR = "SIGNUP_ERROR"

//ACTION CREATORE;

export const signup = (payload)=>({
    type: SIGNUP_SUCCESS,
    payload
});

export const signupLoading = ()=>({
    Type: SIGNUP_LOADING
});

export const signupError = ()=>({
    type: SIGNUP_ERROR
})