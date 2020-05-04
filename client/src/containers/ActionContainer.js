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
    console.log(actionData);

    return (
        <div>
            <h4>Action</h4>
            <div className="movieContainer">
                { actionData.results && actionData.results.map(movie => (
                    <Movie props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );    
}

export default ActionContainer;