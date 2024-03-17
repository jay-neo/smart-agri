import React from 'react'
import "./TCPage.css"
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function TCPage() {
    return (
        <div>
            <NavBar />
            <div className="terms-container">
                <h1 className="terms-heading">Terms and Conditions</h1>
                <p className="terms-text">
                    These terms and conditions outline the rules and regulations for the use of our smart agriculture system.
                    By accessing this system we assume you accept these terms and conditions.
                    Do not continue to use our system if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <h2 className="terms-subheading">Intellectual Property Rights</h2>
                <p className="terms-text">
                    Unless otherwise stated, we own the intellectual property rights for all material on our system.
                    All intellectual property rights are reserved.
                    You may access this from our system for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default TCPage