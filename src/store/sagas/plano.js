import axios from '../../axios.instance';
import {put} from 'redux-saga/effects';

import * as actions from '../action/index';

export function * fetchPlanos(action) {
    try {
        const res = yield axios.get(`orders.json?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`)
        const data = yield[];
        for (let key in res.data) {
            yield data.push({
                ...res.data[key],
                id: key
            })
        }
        yield put(actions.fetchSubmissionsSuccess(data));

    } catch (err) {
        put(actions.fetchSubmissionsFailed(err))
    }
}