import React from 'react';
import PropType from 'prop-types';
import './Movie.css';
import { API_URL, API_KEY, IMAGE_BASE_URL } from './config';
function Movie({id, title, image}) {
    return (
        <img src={`${IMAGE_BASE_URL}w185/${image}`} alt={title} title={title}/>
    );
}

Movie.propTypes = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    image: PropType.string.isRequired,
};

export default Movie;