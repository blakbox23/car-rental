import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchVehiclesSuccess, FETCH_VEHICLES } from '../Actions/VehiclesActions'
import { movieService } from '../../../services/MovieServices'


function* workGetVehiclesSaga(){
    
  const response = yield call(api.getMovies);
    yield put(
    fetchVehiclesSuccess({
      vehicles: response.data
    })
    );
}

function* getVehiclesSaga() {
    yield all([takeLatest(FETCH_VEHICLES, workGetVehiclesSaga)])
}

export default getVehiclesSaga;