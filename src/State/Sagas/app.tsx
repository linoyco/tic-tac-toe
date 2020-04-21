import { put, take, call } from 'redux-saga/effects';
import * as Routes from '../../routes';

import { LOGIN_REQUEST } from '../Actions/App/types';

function* loginRequestFlow() {
    try {
    //  yield put(push(Routes.PROFILE));
    }
    catch (error) {
        console.log(error);
    }
};

export function* watchLoginRequest() {
    while (true) {
        yield take(LOGIN_REQUEST);

        yield call(loginRequestFlow);
    }
};