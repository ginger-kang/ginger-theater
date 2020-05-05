import React from 'react';
import './MainImage.css'

const MainImage = ({props, image}) => {
    return (
        <div style = {{
            background: `url('${image}')`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center, center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
        }} className="mainImage">
            <div className="mainContext">
                <h1>{props.original_title}</h1>
                <p style={{textOverflow: 'ellipsis'}}>{props.overview}</p>
            </div>
        </div>
    );
}

export default MainImage;