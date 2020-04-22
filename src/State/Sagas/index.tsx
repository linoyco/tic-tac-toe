import { all } from 'redux-saga/effects';

import { watchLoginRequest,watchTableReuqest } from './app';

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
        watchTableReuqest()
    ]);
}
