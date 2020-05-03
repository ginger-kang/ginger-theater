import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Movie from './components/Movie';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;
