import React from 'react';
import './Movie.css';
import { IMAGE_BASE_URL } from './config';

const Movie = (props) => {
    return (
        <div className="movie">
            <img src={`${IMAGE_BASE_URL}w185/${props.props.poster_path}`} alt={props.props.original_title}/>
        </div>
    );
}

export default Movie;