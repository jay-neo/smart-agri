import React from 'react'
import "./ContactPage.css"
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function ContactPage() {
    return (
        <div>
            <NavBar />
            <form className='contact-form'>
                <div className="input-box">
                    <label htmlFor="name" className="details">
                        Name*
                    </label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>

                <div className="input-box">
                    <label htmlFor="phone" className="details">
                        Phone*
                    </label>
                    <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>

                <div className="input-box">
                    <label htmlFor="email" className="details">
                        Email
                    </label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div className="input-box">
                    <label htmlFor="address" className="details">
                        Address*
                    </label>
                    <input type="text" id="address" name="address" placeholder="Enter your address" />
                </div>

                <div className="input-box">
                    <label htmlFor="message" className="details">
                        Message*
                    </label>
                    <textarea id="message" rows="3" name="message" required></textarea>
                </div>

                    <div className="contact-btn">
                        <input type="submit" value="Submit" />
                    </div>
            </form>
            <Footer />
        </div>
    )
}

export default ContactPage