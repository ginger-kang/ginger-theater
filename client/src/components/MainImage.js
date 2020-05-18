import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { IMAGE_BASE_URL } from './config';
import './MainImage.css'

const MainImage = ({props}) => {
    const [ imageIndex, setImageindex ] = useState(0);

    const imageLeftSliding = () => {
        if ( imageIndex === 0) {
            setImageindex(2);
        }else {
            setImageindex( imageIndex - 1 );
        }
        console.log(imageIndex);
    }

    const imageRightSliding = () => {
        if ( imageIndex === 2) {
            setImageindex(0);
        }else {
            setImageindex( imageIndex + 1 );
        }
        console.log(imageIndex);
    }

    return (
        <div style = {{
            background: `url('${IMAGE_BASE_URL}original${props[imageIndex].poster_path}')`
        }} className="mainImage">
            <button className="leftButton" onClick={imageLeftSliding}><AiOutlineLeft size={40}/></button>
            <button className="rightButton" onClick={imageRightSliding}><AiOutlineRight size={40}/></button>
            <div className="mainContext">
                <h1>{props[imageIndex].original_title}</h1>
                <p>{props[imageIndex].overview}</p>
            </div>
        </div>
    );
}

export default MainImage;