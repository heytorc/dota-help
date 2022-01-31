import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import HeroesPage from './pages/Heroes';
import ItemsPage from './pages/Items';
import MatchesPage from './pages/Matches';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}  />
      <Route path="/home" element={<HomePage />}  />
      <Route path="/heroes" element={<HeroesPage />}  />
      <Route path="/items" element={<ItemsPage />}  />
      <Route path="/matches" element={<MatchesPage />}  />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;