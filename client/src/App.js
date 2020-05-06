import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeContainer from './containers/Home';
import MainImageContainer from './containers/MainImageContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <HomeContainer />
    </BrowserRouter>
  );
}

export default App;
