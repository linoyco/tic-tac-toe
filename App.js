import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './src/Containers/AppRouter';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './src/State/Reducers/index';
import rootSaga from './src/State/Sagas/index';
import createSagaMiddleware from 'redux-saga';

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;