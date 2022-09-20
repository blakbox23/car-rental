import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchVehiclesSuccess, FETCH_VEHICLES } from '../Actions/VehiclesActions'
import { api } from '../api'

function* workGetVehiclesSaga(){
    
  try {
    const response = yield call(api.getVehicles);
    console.log('api response')
    console.log(response)
    yield put(
        fetchVehiclesSuccess({
          vehicles: response.data
        })
        )
 } catch (e) {
  console.log(e.message)
 }
}


function* getVehiclesSaga() {
    yield all([takeLatest(FETCH_VEHICLES, workGetVehiclesSaga)])
}

export default getVehiclesSaga;