import React from 'react';

import './App.css';
import './components/components.css';
import './pages/pages.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Currency from './pages/Currency';
import Quiz from './pages/Quiz';
import Photogramm from './pages/Photogramm';
import PageNotFound from './pages/PageNotFound';
import Gallery from './components/Gallery';

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
