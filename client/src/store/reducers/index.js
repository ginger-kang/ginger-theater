import { combineReducers } from 'redux';
import popularReducer from './popularReducer';
import trendingReducer from './trendingReducer';
import actionReducer from './actionReducer';


const rootReducer = combineReducers({
    popular: popularReducer,
    trending: trendingReducer,
    action: actionReducer
});

export default rootReducer;