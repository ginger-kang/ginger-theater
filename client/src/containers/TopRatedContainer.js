import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopRated } from '../store/actions/index';
import Movie from '../components/Movie';

const TopRatedContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopRated());
    }, []);

    const topRatedData = useSelector(state => state.topRated.movies, []) || [];

    return (
        <div className="movie__view">
            <h3>평점</h3>
            <div className="movieContainer">
                { topRatedData.results && topRatedData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );    
}

export default TopRatedContainer;