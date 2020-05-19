import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComedy } from '../store/actions/index';
import Movie from '../components/Movie';

const ComedyContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComedy());
    }, []);

    const comedyData = useSelector(state => state.comedy.movies, []) || [];

    return (
        <div className="movie__view">
            <h3>코미디</h3>
            <div className="movieContainer">
                { comedyData.results && comedyData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );    
}

export default ComedyContainer;