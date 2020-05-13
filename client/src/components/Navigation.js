import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import { AiOutlineUser, AiOutlineSearch} from "react-icons/ai";
import Home from '../containers/Home';
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
            <Link to='/' className="movies" >MOVIES</Link>
            <Link to='/party' className="party">PARTY</Link>
            <div>
                <AiOutlineSearch size={32}/>
            </div>
            <Link to='/login' className='login loginBox'><AiOutlineUser size={32}/></Link>
        </div>
    ); 
}

export default Navigation;