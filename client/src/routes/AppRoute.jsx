import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage.jsx";
import MainPage from "../pages/MainPage.jsx";
import CropManagementPage from "../pages/CropManagementPage.jsx";
import MarketPage from "../pages/MarketPage.jsx";
import WorkshopPage from "../pages/WorkshopPage.jsx";
import SchemePage from "../pages/SchemePage.jsx";
import PageError from "../pages/PageNotFound.jsx";
import CommunityPage from '../pages/CommunityPage.jsx';

const AppRoutes = () => (
   <>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/crops" element={<CropManagementPage />} />
        <Route path="/workshops" element={<WorkshopPage />} />
        <Route path="/schemes" element={<SchemePage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="*" element={<PageError />} />
      </Routes>
   </>
);

export default AppRoutes;