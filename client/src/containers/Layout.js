import React from 'react';
import ActionContainer from './ActionContainer';
import PopularContainer from './PopularContainer';
import TrendingContainer from './TrendingContainer';
import TopRatedContainer from './TopRatedContainer';
import NetflixContainer from './NetflixContainer';
import ComedyContainer from './ComedyContainer';

const LayoutContainer = () =>{
    return (
        <div className="layout">
            <PopularContainer />
            <NetflixContainer />
            <TrendingContainer />
            <TopRatedContainer />
            <ActionContainer />
            <ComedyContainer />
        </div>
    )
}

export default LayoutContainer;
