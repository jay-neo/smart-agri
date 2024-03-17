import React from 'react'
import "./IrrigatedUnirrigatedArea.css"
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function IrrigatedUnirrigatedArea() {
    return (
        <div>
            <NavBar />
            <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>
                <img src="https://cdn.dribbble.com/users/2112932/screenshots/18927419/media/996a2c7cff274dd1f610d873583bb050.png" alt="" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} />
            </div>
            <Footer />
        </div>
    )
}

export default IrrigatedUnirrigatedArea