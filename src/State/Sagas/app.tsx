import { take, call, put } from "redux-saga/effects";

import * as Routes from "../../Lib/routes";
import * as RootNavigation from "../../Lib/RootNavigation";
import { LOGIN_REQUEST, TABLE_REQUEST, ERROR_MESSAGE } from "../Actions/App/types";

function* loginRequestFlow() {
    try {
        yield put({ type: ERROR_MESSAGE, error: '' });

        yield RootNavigation.navigate(Routes.PROFILE, null);
    } catch (error) {
        yield put({ type: ERROR_MESSAGE, error: error.message });
    }
}

export function* watchLoginRequest() {
    while (true) {
        yield take(LOGIN_REQUEST);
        yield call(loginRequestFlow);
    }
}

function* tableRequestFlow() {
    try {
        yield put({ type: ERROR_MESSAGE, error: '' });

        yield console.log("Doing some internet stuff to get the table");

    } catch (error) {
        yield put({ type: ERROR_MESSAGE, error: error.message });
    }
}

export function* watchTableReuqest() {
    while (true) {
        yield take(TABLE_REQUEST);
        yield call(tableRequestFlow);
    }
}
