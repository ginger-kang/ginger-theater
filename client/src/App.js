import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeContainer from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <HomeContainer />
    </BrowserRouter>
  );
}

export default App;
