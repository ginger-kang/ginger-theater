import { combineReducers } from 'redux';
import popularReducer from './popularReducer';
import trendingReducer from './trendingReducer';
import actionReducer from './actionReducer';
import netflixReducer from './netflixReducer';
import comedyReducer from './comedyReducer';
import topRatedReducer from './topRatedReducer';
import mainImageReducer from './mainImageReducer';


const rootReducer = combineReducers({
    popular: popularReducer,
    trending: trendingReducer,
    action: actionReducer,
    netflix: netflixReducer,
    comedy: comedyReducer,
    topRated: topRatedReducer,
    mainImage: mainImageReducer
});

export default rootReducer;