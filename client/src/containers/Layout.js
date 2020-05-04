import React from 'react';
import ActionContainer from './ActionContainer';
import PopularContainer from './PopularContainer';
import TrendingContainer from './TrendingContainer';

const LayoutContainer = () =>{
    return (
        <div className="layout">
            <PopularContainer />
            <TrendingContainer />
            <ActionContainer />
        </div>
    )
}

export default LayoutContainer;
