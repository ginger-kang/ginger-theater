import { GET_TRENDING_MOVIES } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case GET_TRENDING_MOVIES:
          return {
            ...state,
            movies: action.data
          } 
      default:
          return state;
  }
}