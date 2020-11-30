import CounterReducer from './counter';
import AuthReducer from './auth';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    CounterReducer,
    AuthReducer    
});

export default allReducers;
