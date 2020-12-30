// Dependencies
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

// Reducers
import CommitsReducer from 'reducers/CommitsReducer';
import NameReducer from 'reducers/NameReducer';

export default(history) => combineReducers({
  router: connectRouter(history),
  commits: CommitsReducer,
  name: NameReducer
});
