import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import Home from "./containers/Home";
import SearchMovie from "./containers/SearchMovie";

import "./components/Navigation.css";

function App() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    //console.log(window.scrollY);
    if (window.scrollY < 500) {
      setScroll(false);
    } else if (window.scrollY >= 500) {
      setScroll(true);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className={"nav" + (scroll ? "black" : "")}>
        <Link to={process.env.PUBLIC_URL} className="netcha">
          <span className="ginger">GINGER</span>
          <span className="ginger-movie">THEATER</span>
        </Link>
        <Link to={process.env.PUBLIC_URL} className="home">
          HOME
        </Link>
        <div className="navIcon">
          <Link to="/search" className="searchIcon">
            <AiOutlineSearch size={32} />
          </Link>
          <Link to="/login" className="loginIcon">
            <AiOutlineUser size={32} />
          </Link>
        </div>
      </div>
      <Route path={process.env.PUBLIC_URL} exact={true} component={Home} />
      <Route path="/search" component={SearchMovie} />
    </>
  );
}

export default App;
