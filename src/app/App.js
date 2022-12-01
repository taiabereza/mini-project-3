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

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/currency' element={<Currency />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/photogramm' element={<Photogramm />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
