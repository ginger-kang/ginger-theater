import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LayoutContainer from './containers/Layout';
import MainImageContainer from './containers/MainImageContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <MainImageContainer />
      <LayoutContainer />
    </BrowserRouter>
  );
}

export default App;
