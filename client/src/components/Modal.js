import React from 'react';
import { IMAGE_BASE_URL } from './config';

const Modal = ({title, image, content, show, handleClose}) => {
    const showHideModalContainer = show ? "showModal" : "hideModal";

    return (
        show ?
            <div className={showHideModalContainer} onClick={handleClose} style={{
                background: `url('${IMAGE_BASE_URL}original/${image}')`,
                zIndex: '300',
                width: '70%',
                height: '85%',
                backgroundSize: 'cover',
                backgroundPosition: 'center, center',
                backgroundRepeat: 'no-repeat',
                position: 'fixed',
                top: '5%',
                left: '15%',
                bottom: '3rem',
                margin: '0 0rem',
                opacity: '0.9' 
            }}>
                <div className="modalText" style={{
                    position: 'absolute',
                    left: '3rem',
                    bottom: '11rem',
                    width: 'auto',
                    height: '3rem',
                    textOverflow: 'ellipsis'
                }}>
                    <h1 style={{
                        fontSize: '3rem'
                    }}>{title}</h1>
                    <p style={{
                        fontSize: '1.3rem',
                    }}>{content}</p>
                </div>
            </div>
        : null
    );
}

export default Modal;