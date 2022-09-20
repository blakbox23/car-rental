import createSagaMiddleware from '@redux-saga/core'
import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import rootSaga from './Sagas/rootSaga'
// import rootReducer from './Reducers/rootReducers'
import logger from "redux-logger";
import vehiclesReducers from './Reducers/vehiclesReducer'

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];


// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
const store = configureStore({ 
    reducer: {
      vehicles: vehiclesReducers,
    },
    middleware
  })

sagaMiddleware.run(rootSaga)


export default store