import { all } from 'redux-saga/effects';

import { watchLoginRequest, watchTableRequest } from './app';

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
        watchTableRequest()
    ]);
}
