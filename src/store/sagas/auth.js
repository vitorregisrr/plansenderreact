import {delay} from 'redux-saga/effects';
import {put} from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../action/index';

export function * checkAuthTimeoutSaga(action) {
    // yield delay((action.expirationTime * 1000));
    // yield put(actions.logout());
}

export function * checkAuthStateSaga(action) {
    // const token = yield localStorage.getItem('authToken');
    // if (!token) {
    //     yield put(actions.logout());

    // } else {
    //     const expiration = yield new Date(localStorage.getItem('expirationDate'));
    //     if (expiration > new Date()) {
    //         const userId = yield localStorage.getItem('userId');
    //         yield put(actions.auth_success(token, userId))
    //         yield put(actions.checkAuthTimeout((expiration.getTime() - new Date().getTime()) / 1000))

    //     } else {
    //         yield put(actions.logout());
    //     }
    // }
}

export function * logoutSaga(action) {
    // yield localStorage.removeItem('authToken');
    // yield localStorage.removeItem('userId');
    // yield localStorage.removeItem('expirationDate');

    // yield put(actions.logout_succed());
}

export function * authSaga(action) {
    // try {
    //     if (action.action == 'LOGIN') {
    //         const res = yield axios.post(SIGN_URL{
    //         email: action.email,
    //         password: action.password,
    //         returnSecureToken: true
    //     }); 
    //     } else if (action.action == 'SIGNUP') {
    //         const res = yield axios.post(SIGN_URL{
    //                   email: action.email,
    //                   password: action.password,
    //                   returnSecureToken: true
    //               });
    //     }

    //     yield put(actions.auth_success(res.data.idToken, res.data.localId));
    //     yield put(actions.checkAuthTimeout(res.data.expiresIn))

    //     yield localStorage.setItem('authToken', res.data.idToken);
    //     yield localStorage.setItem('userId', res.data.localId);
    //     if (!localStorage.getItem('expirationDate')) {
    //         yield localStorage.setItem('expirationDate', new Date(Date.now() + (res.data.expiresIn * 1000)));
    //     }

    // } catch (err) {
    //     yield put(actions.auth_failed(err))
    // }

}