import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppRouter from './src/Containers/AppRouter';
import { rootReducer } from './src/State/Reducers/index';
import rootSaga from './src/State/Sagas/index';
import styled from 'styled-components';
import { View } from 'react-native';

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  
  width: 100%;
  height: 100%
  border: 2px solid red;
`;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(),
  compose(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <StyledView>
      <AppRouter />
      </StyledView>
  </Provider>
);

export default App;