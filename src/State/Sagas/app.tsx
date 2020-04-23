import { take, call } from "redux-saga/effects";

import * as Routes from "../../Lib/routes";
import * as RootNavigation from "../../Lib/RootNavigation";
import { LOGIN_REQUEST, TABLE_REQUEST } from "../Actions/App/types";

function* loginRequestFlow() {
    try {
        yield RootNavigation.navigate(Routes.PROFILE, null);
    } catch (error) {
        console.log(error);
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
        yield console.log("Doing some internet stuff to get the table");

    } catch (error) {
        console.log(error);
    }
}

export function* watchTableReuqest() {
    while (true) {
        yield take(TABLE_REQUEST);
        yield call(tableRequestFlow);
    }
}
