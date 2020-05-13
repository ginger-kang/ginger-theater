import React from 'react';
import ActionContainer from './ActionContainer';
import PopularContainer from './PopularContainer';
import TrendingContainer from './TrendingContainer';
import NetflixContainer from './NetflixContainer';
import ComedyContainer from './ComedyContainer';
import AnimationContainer from './AnimationContainer';
import MainImageContainer from './MainImageContainer';
import Navigation from '../components/Navigation';

const HomeContainer = () =>{
    return (
        <div className="layout">
            <Navigation />
            <MainImageContainer />
            <PopularContainer />
            <NetflixContainer />
            <TrendingContainer />
            <AnimationContainer />
            <ActionContainer />
            <ComedyContainer />
        </div>
    )
}

export default HomeContainer;
