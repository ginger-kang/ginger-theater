import React from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from './config';

const Movie = (props) => {
    return (
        <div className="movie">
            <img src={`${IMAGE_BASE_URL}original/${props.props.backdrop_path}`} alt={props.props.original_title}/>
        </div>
    );
}

export default Movie;