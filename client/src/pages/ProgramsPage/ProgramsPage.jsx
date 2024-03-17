import React from 'react'
import "./ProgramsPage.css"
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function ProgramsPage() {
    return (
        <div>
            <NavBar />
            <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>ERROR: Government API could not be found.</h1>
            </div>
            <Footer />
        </div>
    )
}

export default ProgramsPage