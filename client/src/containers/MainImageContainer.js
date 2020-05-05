import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMainImage } from '../store/actions/index';
import MainImage from '../components/MainImage';
import { IMAGE_BASE_URL } from '../components/config';

const MainImageContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMainImage());
    }, []);

    const mainImageData = useSelector(state => state.mainImage.movies, []) || [];
    console.log(mainImageData.results);

    return (
        <div className="mainImageContainer">
            { mainImageData.results && 
            <MainImage props={mainImageData.results[0]} image={`${IMAGE_BASE_URL}w1280/${mainImageData.results[0].backdrop_path}`}/>}
        </div>
    );    
}

export default MainImageContainer;