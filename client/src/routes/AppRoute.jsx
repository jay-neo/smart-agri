import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from "../pages/HomePage/HomePage.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";


import SignInPage from "../pages/SigninPage/SigninPage.jsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage.jsx";
import ProgramsPage from "../pages/ProgramsPage/ProgramsPage.jsx";



import CropManagement from "../pages/CropManagement/CropManagement.jsx";
import PostHarvest from "../pages/PostHarvest/PostHarvest.jsx";
import RiskManagement from "../pages/RiskManagement/RiskManagement.jsx";
import SoilHealthCard from "../pages/SoilHealthCard/SoilHealthCard.jsx";
import LiveStockCensus from "../pages/LiveStockCensus/LiveStockCensus.jsx";
import DiseaseAndSymptoms from "../pages/DiseaseAndSymptoms/DiseaseAndSymptoms.jsx";
import DiagnosticLaboratory from "../pages/DiagnosticLaboratory/DiagnosticLaboratory.jsx";
import IrrigatedUnirrigatedArea from "../pages/IrrigatedUnirrigatedArea/IrrigatedUnirrigatedArea.jsx";
import AgriculturalLand from "../pages/AgriculturalLand/AgriculturalLand.jsx";
import WeatherDetails from "../pages/WeatherDetails/WeatherDetails.jsx";
import ExtremeWeatherAlert from "../pages/ExtremeWeatherAlert/ExtremeWeatherAlert.jsx";



import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";
import HelpPage from "../pages/HelpPage/HelpPage.jsx";
import TCPage from "../pages/TCPage/TCPage.jsx";

import PageError from "../pages/PageNotFound.jsx";



const AppRoutes = () => (
   <>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />

        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/user/:uid" element={<ProfilePage/>} />


        <Route path="/crop-management" element={<CropManagement/>} />
        <Route path="/post-harvest" element={<PostHarvest/>} />
        <Route path="/risk-management" element={<RiskManagement/>} />
        <Route path="/soil-health-card" element={<SoilHealthCard/>} />
        <Route path="/livestock-census" element={<LiveStockCensus/>} />
        <Route path="/disease-symptoms" element={<DiseaseAndSymptoms/>} />
        <Route path="/diagnostic-laboratory" element={<DiagnosticLaboratory/>} />
        <Route path="/irrigated-unirrigated-area" element={<IrrigatedUnirrigatedArea/>} />
        <Route path="/agricultural-land" element={<AgriculturalLand/>} />
        <Route path="/weather-details" element={<WeatherDetails/>} />
        <Route path="/extreme-weather-alert" element={<ExtremeWeatherAlert/>} />




        <Route path="/help" element={<HelpPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactPage/>} />
        <Route path="/termsandcondition" element={<TCPage/>} />
        <Route path="*" element={<PageError />} />
      </Routes>
   </>
);

export default AppRoutes;