import React from 'react';
import './App.css';

import MainPage from './pages/MainPage';
import MovieCardContent from './components/MovieCardContent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/movie' exact component={MovieCardContent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
