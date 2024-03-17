import React from 'react'
import { Link } from 'react-router-dom';
import "./HomePage.css"
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'




function HomePage() {

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="left-content">
                    <h2>Agriculture & Horticulture Corner</h2>
                    <ul>
                        <li>🌽 <Link className="main-link" to="/crop-management">Crop Management</Link></li>
                        <li>🌾 <Link className="main-link" to="/post-harvest">Post Harvest</Link></li>
                        <li>👩🏻‍🌾 <Link className="main-link" to="/risk-management">Risk Management</Link></li>
                        <li>🍃 <Link className="main-link" to="/soil-health-card">Soil Health Card</Link></li>
                        <li>🥬 <Link className="main-link" to="/livestock-census">Livestock Census</Link></li>
                        <li>🌱 <Link className="main-link" to="/disease-symptoms">Disease And Symptoms</Link></li>
                        <li>🧪 <Link className="main-link" to="/diagnostic-laboratory">Diagnostic Laboratory</Link></li>
                    </ul>

                    <br/><br/><br/>
                    <h2>Weather and Lands</h2>
                    <ul>
                        <li>🗺️ <Link className="main-link" to="/irrigated-unirrigated-area">Irrigated-Unirrigated Area</Link></li>
                        <li>🚜 <Link className="main-link" to="/agricultural-land">Agricultural Land</Link></li>
                        <li>🌤️ <Link className="main-link" to="/weather-details">Weather Details</Link></li>
                        <li>🌦️ <Link className="main-link" to="/extreme-weather-alert">Extreme Weather Alert</Link></li>
                    </ul>
                </div>

                <div className="center-content">
                    {/* <img src="../src/assets/tree.png" alt="img" /> */}
                    <img src="https://www.transparentpng.com/thumb/tree/trees-png-photo-2.png" alt="img" />
                </div>

                <div className="right-content">
                <h2>Latest News</h2>
                <ul>
                    <li>Mobile Apps</li>
                    <li>Agricoop</li>
                    <li>Data Entry Progress</li>
                    <li>DAC Dashboard</li>
                    <li>Pradhan Mantri Fasal Bima Yojana</li>
                    <li>mKisan</li>
                </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default HomePage