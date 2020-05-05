import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="nav">
            <Link to='/' className="netcha">
                <span className="net">NET</span>
                <span className="cha">CHA</span>
            </Link>
            <Link to='/' className="home">HOME</Link>
            <Link to='/party' className="party">PARTY</Link>
        </div>
    ); 
}

export default Navigation;