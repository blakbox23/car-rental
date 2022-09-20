
import { combineReducers } from "redux";
import vehiclesReducer from './vehiclesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  ratings: RatingsReducer,
  user: UserReducer,
  comments: CommentsReducer
});

// export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;