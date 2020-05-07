import React, { useState } from 'react';
import Modal from './Modal';
import { IMAGE_BASE_URL } from '../components/config';
import './Search.css';

const Search = (props) => {
    const [ modal, setModal ] = useState(false);

    const showModal = () => {
        setModal( true );
    };
    
    const hideModal = () => {
        setModal( false );
    };

    return (
        <>
            <div className="searchMovie" onClick={() => showModal()}>
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

export default Search;