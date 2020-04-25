import { take, call, put } from 'redux-saga/effects';

import * as Routes from '../../Lib/routes';
import * as RootNavigation from '../../Lib/RootNavigation';
import * as HttpRequests from '../../Api/App';
import { LOGIN_REQUEST, TABLE_REQUEST, ERROR_MESSAGE, LOGOUT_REQUEST } from '../Actions/App/types';
import { ILoginDetails } from '../../Containers/LoginPage';

function* loginRequestFlow(loginDetails: ILoginDetails) {
    try {
        yield put({ type: ERROR_MESSAGE, error: "" });
        const res = yield HttpRequests.loginRequest(loginDetails);
        console.log(res.data);
        yield put({ type: LOGIN_REQUEST, loginDetails: res.data });
        yield RootNavigation.navigate(Routes.PROFILE, null);
    } catch (error) {
        yield put({ type: ERROR_MESSAGE, error: error.message });
    }
}

export function* watchLoginRequest() {
    while (true) {
        const { loginDetails } = yield take(LOGIN_REQUEST);
        yield call(loginRequestFlow, loginDetails);
    }
}

function* logoutRequestFlow() {
    try {
        yield RootNavigation.navigate(Routes.HOME, null);
        console.log("Logging out")
    } catch (error) {
        yield put({ type: ERROR_MESSAGE, error: error.message });
    }
}

export function* watchLogoutRequest() {
    while (true) {
        yield take(LOGOUT_REQUEST);
        yield call(logoutRequestFlow);
    }
}

function* tableRequestFlow(loginDetails: ILoginDetails) {
    try {
        yield put({ type: ERROR_MESSAGE, error: "" });
        const res = yield HttpRequests.tableRequest(loginDetails);
        yield put({ type: TABLE_REQUEST, topPlayersTable: res.data });
    } catch (error) {
        yield put({ type: ERROR_MESSAGE, error: error.message });
    }
}

export function* watchTableRequest() {
    while (true) {
        const { loginDetails } = yield take(TABLE_REQUEST);
        yield call(tableRequestFlow, loginDetails);
    }
}
