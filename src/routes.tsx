import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}  />
      <Route path="/home" element={<HomePage />}  />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;