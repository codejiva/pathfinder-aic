import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Form from './pages/Form';
import Tes from './pages/Tes';
import Response from './pages/Response';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/response" element={<Response />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
