import { GET_NETFLIX_MOVIES } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case GET_NETFLIX_MOVIES:
            return {
                ...state,
                movies: action.data
            }
        default:
            return state;
    }
}
