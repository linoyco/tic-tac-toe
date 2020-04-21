import { all } from 'redux-saga/effects';

import { watchLoginRequest } from './app';

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
    ]);
}
