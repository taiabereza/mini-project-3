import React from 'react';

import './App.css';
import './components/components.css';
import './pages/pages.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Currency from './pages/currency';
import Quiz from './pages/quiz';
import Photogramm from './pages/photogramm';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/mini-project-3/' element={<Home />} />
          <Route path='/mini-project-3/currency' element={<Currency />} />
          <Route path='/mini-project-3/quiz' element={<Quiz />} />
          <Route path='/mini-project-3/photogramm' element={<Photogramm />} />
          <Route path='/mini-project-3/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
