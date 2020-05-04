import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPopular } from '../store/actions/index';
import Movie from '../components/Movie';

const PopularContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopular());
    }, []);

    const popularData = useSelector(state => state.popular.movies, []) || [];

    return (
        <div>
            <h4>Popular</h4>
            <div className="movieContainer">
                { popularData.results && popularData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );    
}

export default PopularContainer;