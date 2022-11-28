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
