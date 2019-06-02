import * as actionTypes from './types';

export const authSuccess = (token, userId, expiration) => {
    return {type: actionTypes.AUTH_SUCCESS, token, userId, expiration}
}

export const authFailed = error => {
    return {type: actionTypes.AUTH_FAILED, error: error.response.data.error}
}

export const setAuthRedirectPath = path => {
    return {type: actionTypes.SET_AUTH_REDIRECT_PATH, path}
}

export const logout = () => {
    return {type: actionTypes.AUTH_INITIATE_LOGOUT}
}

export const logoutSucced = () => {
    return {type: actionTypes.AUTH_LOGOUT }
}

export const checkAuthTimeout = expirationTime => {
    return{
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime
    }
}

export const auth = (email, password, method) => {
    return {
        type: actionTypes.AUTH_START,
        email,
        password,
        method
    }
}

export const checkAuthState = () => {
   return{
       type: actionTypes.AUTH_CHECK_STATE
   }
}