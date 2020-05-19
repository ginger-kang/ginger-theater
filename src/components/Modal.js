import React from 'react';
import { IMAGE_BASE_URL } from './config';
import { AiOutlineClose } from 'react-icons/ai';
import './Modal.css';

const Modal = ({title, image, content, show, handleClose}) => {
    const showHideModalContainer = show ? "showModal" : "hideModal";

    return (
        show ?
        <div className="modalContainer">
            <div className={showHideModalContainer} style={{
                background: `url('${IMAGE_BASE_URL}original/${image}')`,
            }}>
                <button onClick={handleClose} 
                    className="modalCloseButton">
                        <AiOutlineClose size={45}
                />
                </button>
                <div className="modalText">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
        : null
    );
}

export default Modal;