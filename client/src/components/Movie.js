import React from 'react';
import PropType from 'prop-types';
import './Movie.css';
import { API_URL, API_KEY, IMAGE_BASE_URL } from './config';
function Movie({id, title, image}) {
    return (
    <div className="movie">
        <img src={`${API_URL}/movie/28/images?api_key=${API_KEY}&language=en-US`} alt={title} title={title}/>
        <div className="nav_bar">
            <span>W / N</span>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    image: PropType.string.isRequired,
};

export default Movie;