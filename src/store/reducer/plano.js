import * as actionTypes from '../action/types';

const initialState = {
    planos: null,
    loading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_PLANOS_START:
            state = {
                ...state,
                loading: true
            }
            break;

        case actionTypes.FETCH_PLANOS_FAILED:
            state = {
                ...state,
                error: action.error,
                loading: false
            }
            break;

        case actionTypes.FETCH_PLANOS_SUCCESS:
            state = {
                ...state,
                loading: false,
                PLANOS: action.data
            }
            break;


        default:
    }

    return state;
}

export default reducer;