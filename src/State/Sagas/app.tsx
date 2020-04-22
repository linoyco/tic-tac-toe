import { take, call } from 'redux-saga/effects';

import * as Routes from '../../Lib/routes';
import * as RootNavigation from '../../Lib/RootNavigation';
import { LOGIN_REQUEST } from '../Actions/App/types';

function* loginRequestFlow() {
    try {
        yield RootNavigation.navigate(Routes.PROFILE, null);
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