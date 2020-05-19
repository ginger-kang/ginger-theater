import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAction } from '../store/actions/index';
import Movie from '../components/Movie';

const ActionContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAction());
    }, []);

    const actionData = useSelector(state => state.action.movies, []) || [];

    return (
        <div className="movie__view">
            <h3>액션</h3>
            <div className="movieContainer">
                { actionData.results && actionData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );    
}

export default ActionContainer;