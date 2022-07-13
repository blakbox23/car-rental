import createSagaMiddleware from '@redux-saga/core'
import {createStore, applyMiddleware} from 'redux/toolkit'
import rootSaga from './Sagas/rootSaga'
import rootReducer from './Reducers/rootReducers'
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)


export default store