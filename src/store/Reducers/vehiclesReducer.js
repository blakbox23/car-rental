import { FETCH_VEHICLES_SUCCESS } from "../Actions/VehiclesActions";
import { FETCH_VEHICLES } from "../Actions/VehiclesActions";


const initialState = {
    pending: false,
    error: null,
    vehicles: [],
  };

  const vehiclesReducer = (state = initialState, action) => {
    switch (action.types) {
      case FETCH_VEHICLES:
          return {
              ...state,
              pending: true
          };

      case FETCH_VEHICLES_SUCCESS: 
        return {
          ...state,
          pending: false,
          vehicles: action.payload.vehicles,
          error: null
        };

      // case ratingTypes.UPDATE_RATING_FAILURE:
      // return {
      //   ...state,
      //   pending: false,
      //   error: action.payload.error
      // };

      default:
        return {
            ...state
        };
    }
}

export default vehiclesReducer