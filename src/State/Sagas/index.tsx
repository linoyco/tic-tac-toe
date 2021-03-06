import { all } from 'redux-saga/effects';

import { watchLoginRequest, watchTableRequest ,watchLogoutRequest} from './app';

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
        watchLogoutRequest(),
        watchTableRequest()
    ]);
}
