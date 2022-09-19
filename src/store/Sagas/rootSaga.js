import getVehiclesSaga from "./GetVehiclesSaga";
import { fork, all } from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([fork(getVehiclesSaga)
  ]);
}