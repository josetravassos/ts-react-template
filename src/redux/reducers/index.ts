import { combineReducers } from 'redux';
import gameSReducer from './gamesReducer';

const rootReducer = combineReducers({
  games: gameSReducer,
});

export default rootReducer;
