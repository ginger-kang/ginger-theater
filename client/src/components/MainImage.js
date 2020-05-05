import React from 'react';
import './MainImage.css'

const MainImage = ({props, image}) => {
    return (
        <div style = {{
            background: `url('${image}')`,
            width: '100%',
            height: '100%',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            position: 'relative'
        }} className="mainImage">
            <div className="mainContext">
                <h1>{props.original_title}</h1>
                {/* <p style={{textOverflow: 'ellipsis'}}>{props.overview}</p> */}
            </div>
        </div>
    );
}

export default MainImage;