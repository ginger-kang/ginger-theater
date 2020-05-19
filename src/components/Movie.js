import React, { useState } from 'react';
import './Movie.css';
import { IMAGE_BASE_URL } from './config';
import Modal from './Modal';

const Movie = (props) => {

    const [ modal, setModal ] = useState(false);

    const showModal = () => {
        setModal( true );
    };
    
    const hideModal = () => {
        setModal( false );
    };

    return (
        <>
            <div className="movie" onClick={() => showModal()}>
                <img src={`${IMAGE_BASE_URL}w185/${props.props.poster_path}`} alt={props.props.original_title}/>
            </div>
            <Modal 
                title = {props.props.title}
                image = {props.props.poster_path}
                content = {props.props.overview}
                show = {modal}
                handleClose = {() => hideModal()}
            />
        </>
    );
}

export default Movie;