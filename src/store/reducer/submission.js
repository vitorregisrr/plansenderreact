import * as actionTypes from '../action/types';

const initialState = {
    submissions: null,
    loading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_SUBMISSIONS_START:
            state = {
                ...state,
                loading: true
            }
            break;

        case actionTypes.FETCH_SUBMISSIONS_FAILED:
            state = {
                ...state,
                error: action.error,
                loading: false
            }
            break;

        case actionTypes.FETCH_SUBMISSIONS_SUCCESS:
            state = {
                ...state,
                loading: false,
                submissions: action.data
            }
            break;


        default:
    }

    return state;
}

export default reducer;