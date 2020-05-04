import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrending } from '../store/actions/index';
import Movie from '../components/Movie';

const TrendingContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrending());
    }, []);

    const trendingData = useSelector(state => state.trending.movies, []) || [];

    return (
        <div>
            <h4>Trend</h4>
            <div className="movieContainer">
                { trendingData.results && trendingData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );    
}

export default TrendingContainer;