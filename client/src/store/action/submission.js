import * as actionTypes from './types';

export const fetchSubmissions = (token, userId) => {
    return{
        type: actionTypes.FETCH_SUBMISSIONS_START,
        token,
        userId
    }
}

export const fetchSubmissionsSuccess = (data) => {
    return{
        type: actionTypes.FETCH_SUBMISSIONS_SUCCESS,
        data
    }
}

export const fetchSubmissionsFailed = (error) => {
    return{
        type: actionTypes.FETCH_SUBMISSIONS_FAILED,
        error
    }
}