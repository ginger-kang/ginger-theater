import { GET_ANIMATION_MOVIES } from '../actions';

export default function (state = [], action){
    switch ( action.type ){
        case GET_ANIMATION_MOVIES:
            return {
                ...state,
                movies: action.data
            }
        default:
            return state;
    }
}