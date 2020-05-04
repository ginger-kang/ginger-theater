import axios from 'axios';
import { API_URL, API_KEY } from '../../components/config';

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const GET_ACTION_MOVIES = 'GET_ACTION_MOVIES';
export const GET_TRENDING_MOVIES = 'GET_TRENDING_MOVIES';

export const getPopularData = (data) => {
    return {
        type: GET_POPULAR_MOVIES,
        data
    }
  }
  
  export const getPopular = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                dispatch(getPopularData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
  }

  export const getTrendData = (data) => {
    return {
        type: GET_TRENDING_MOVIES,
        data
    }
  }
  
  export const getTrending = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                dispatch(getTrendData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
  }

  export const getActionData = (data) => {
    return {
        type: GET_ACTION_MOVIES,
        data
    }
  }
  
  export const getAction = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
            .then(response => {
                dispatch(getActionData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
  }


  