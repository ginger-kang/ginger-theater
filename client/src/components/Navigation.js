import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    const [scroll, setScroll] = useState(false);

    const checkScroll = () => {
        //console.log(window.scrollY);
        if(window.scrollY < 500) {
            setScroll(false);
        } else if (window.scrollY >= 500) {
            setScroll(true);
        }
    }
    
    window.addEventListener('scroll', checkScroll);

    return (
        <div className={"nav" + (scroll ? "black" : "")}>
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