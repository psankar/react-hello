import {combineReducers} from 'redux';
import UsersReducer from './reducer-users';
import ActiveUserReducer from './activeUser';

const allReducers = combineReducers({
    users: UsersReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;