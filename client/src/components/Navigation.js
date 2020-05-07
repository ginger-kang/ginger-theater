import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import { AiOutlineUser, AiOutlineSearch} from "react-icons/ai";
import SearchMovie from '../containers/SearchMovie';

const Navigation = () => {
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        //console.log(window.scrollY);
        if(window.scrollY < 500) {
            setScroll(false);
        } else if (window.scrollY >= 500) {
            setScroll(true);
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    return (
        <div className={"nav" + (scroll ? "black" : "")}>
            <Link to='/' className="netcha">
                <span className="net">NET</span>
                <span className="cha">CHA</span>
            </Link>
            <Link to='/' className="home">HOME</Link>
            <Link to='/party' className="party">PARTY</Link>
            <div className="navIcon"> 
                <div className="inputBox">
                    <SearchMovie />
                </div>
                <div className="userBox">
                    <a><AiOutlineUser size={32}/></a>
                </div>
            </div>
        </div>
    ); 
}

export default Navigation;