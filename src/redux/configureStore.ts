/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

'use strick';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import sagas from './sagas';

// @ts-ignore
const isDebuggingInChrome = window.__DEV__ && !window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export { store, persistor };
