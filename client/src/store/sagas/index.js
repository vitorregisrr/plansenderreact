import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../action/types';

import { logoutSaga, checkAuthTimeoutSaga, authSaga, checkAuthStateSaga } from './auth';
import { fetchSubmissionsSaga } from './submission';
import { fetchPlanosSaga } from './plano';

export function* watchAut(){
    yield takeEvery(actionTypes.FETCH_SUBMISSIONS_START)
}