import axios from 'axios';
import { API_URL, API_KEY } from '../../components/config';

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const GET_ACTION_MOVIES = 'GET_ACTION_MOVIES';
export const GET_TRENDING_MOVIES = 'GET_TRENDING_MOVIES';
export const GET_NETFLIX_MOVIES = 'GET_NETFLIX_MOVIES';
export const GET_TOP_RATED_MOVIES = 'GET_TOP_RATED_MOVIES';
export const GET_COMEDY_MOVIES = 'GET_COMEDY_MOVIES';
export const GET_MAIN_IMAGE = 'GET_MAIN_IMAGE';
export const GET_ANIMATION_MOVIES = 'GET_ANIMATION_MOVIES';


export const getAnimationData = (data) => {
    return {
        type: GET_ANIMATION_MOVIES,
        data
    }
}

export const getAnimation = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`)
            .then (response => {
                dispatch(getAnimationData(response.data))
            })
            .catch (e => {
                throw(e)
            })
    }
}

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
                //console.log(response.data.results[0])
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

export const getNetflixData = (data) => {
    return {
        type: GET_NETFLIX_MOVIES,
        data
    }
}

export const getNetflix = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`)
            .then(response => {
                dispatch(getNetflixData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
}

export const getComedyData = (data) => {
    return {
        type: GET_COMEDY_MOVIES,
        data
    }
}

export const getComedy = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
            .then(response => {
                dispatch(getComedyData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
}

export const getMainImageData = (data) => {
    return {
        type: GET_MAIN_IMAGE,
        data
    }
}
  
export const getMainImage = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                dispatch(getMainImageData(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
}
  