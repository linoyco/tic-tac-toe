import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider as PaperProvider } from 'react-native-paper';
import AppRouter from './src/Containers/AppRouter';
import { rootReducer } from './src/State/Reducers/index';
import rootSaga from './src/State/Sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(),
  compose(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <PaperProvider>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </PaperProvider>
);

export default App;