import { put, take, call } from 'redux-saga/effects';

import { LOGIN_REQUEST } from '../Actions/App/types';

function* loginRequestFlow(phoneNumber: string, fullName: string) {
    try {

    }
    catch (error) {
        console.log(error);
    }
};

export function* watchLoginRequest() {
    while (true) {
        const { phoneNumber, fullName } = yield take(LOGIN_REQUEST);

        yield call(loginRequestFlow, phoneNumber, fullName);
    }
};