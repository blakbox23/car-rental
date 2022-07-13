import getVehiclesSaga from "./GetVehiclesSaga";

export default function* rootSaga() {
  yield all([fork(getVehiclesSaga)
  ]);
}