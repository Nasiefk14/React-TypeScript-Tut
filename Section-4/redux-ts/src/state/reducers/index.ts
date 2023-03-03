import { combineReducers } from "redux";
import repositoreiesReducer from './repositoriesReducers'

const reducers = combineReducers({
    repositories: repositoreiesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;