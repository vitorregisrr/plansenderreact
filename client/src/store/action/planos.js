import * as actionTypes from './types';

export const fetchPlanos = (token, userId) => {
    return{
        type: actionTypes.FETCH_PLANOS_START,
        token,
        userId
    }
}

export const fetchPlanosSuccess = (data) => {
    return{
        type: actionTypes.FETCH_PLANOS_SUCCESS,
        data
    }
}

export const fetchPlanosFailed = (error) => {
    return{
        type: actionTypes.FETCH_PLANOS_FAILED,
        error
    }
}