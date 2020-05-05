import React from 'react';
import { IMAGE_BASE_URL } from './config';

const Modal = ({title, image, content, show, handleClose}) => {
    const showHideModalContainer = show ? "showModal" : "hideModal";

    return (
        show ?
        <div className={showHideModalContainer} onClick={handleClose}>
            <div className="modalMain">
                <img src={`${IMAGE_BASE_URL}w500/${image}`} alt={title}/>
                <div className="modalText">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
        : null
    );
}

export default Modal;