import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { View, StyleSheet } from 'react-native';

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
  <Provider store={store}>
    <View style={styles.container}>
      <AppRouter />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default App;