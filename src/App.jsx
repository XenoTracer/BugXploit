import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Recon from './pages/Recon';
import CVELookup from './pages/CVELookup';
import Docs from './pages/Docs';

export default function App() {
  return (
    <Router>
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
        <div className="text-lg font-bold text-white">🐞 BugXploit</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-cyan-400">Home</Link>
          <Link to="/recon" className="text-white hover:text-cyan-400">Recon</Link>
          <Link to="/cve" className="text-white hover:text-cyan-400">CVE Lookup</Link>
          <Link to="/docs" className="text-white hover:text-cyan-400">Docs</Link>
        </div>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recon" element={<Recon />} />
          <Route path="/cve" element={<CVELookup />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </Router>
  );
}