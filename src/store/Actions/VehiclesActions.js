
export const FETCH_VEHICLES = 'FETCH_VEHICLES'
export const FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS'


export const fetchVehicles = () => ({ 
    type: FETCH_VEHICLES
  });

  export const fetchVehiclesSuccess = (payload) => ({ 
    type: FETCH_VEHICLES_SUCCESS,
    payload
  });