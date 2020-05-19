import { combineReducers } from 'redux';
import popularReducer from './popularReducer';
import trendingReducer from './trendingReducer';
import actionReducer from './actionReducer';
import netflixReducer from './netflixReducer';
import comedyReducer from './comedyReducer';
import mainImageReducer from './mainImageReducer';
import animationReducer from './animationReducer';


const rootReducer = combineReducers({
    popular: popularReducer,
    trending: trendingReducer,
    action: actionReducer,
    netflix: netflixReducer,
    comedy: comedyReducer,
    mainImage: mainImageReducer,
    animation: animationReducer
});

export default rootReducer;