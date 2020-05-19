import { GET_MAIN_IMAGE } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case GET_MAIN_IMAGE:
          return {
              ...state,
            movies: action.data
          } 
      default:
          return state;
  }
}