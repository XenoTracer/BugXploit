import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recon from './pages/Recon';
import CVELookup from './pages/CVELookup';
import Docs from './pages/Docs';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recon' element={<Recon />} />
        <Route path='/cve' element={<CVELookup />} />
        <Route path='/docs' element={<Docs />} />
      </Routes>
    </Router>
  );
}