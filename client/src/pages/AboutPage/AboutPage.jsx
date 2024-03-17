import React from 'react'
import "./AboutPage.css"
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function AboutPage() {
    return (
        <div>
            <NavBar />
            <div className="about-container">
                <img src="https://media.licdn.com/dms/image/C5603AQG1wjxtuuZQtw/profile-displayphoto-shrink_800_800/0/1623655319282?e=1717027200&v=beta&t=avYLQZmj6Ycjod5fZIgkjbF7Ofz9YV7EtetIIy-cMkg" alt="" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} />
                <br />
                <h1 className="about-heading">About Our Smart Agriculture System</h1>
                <p className="about-text">
                    Welcome to our smart agriculture system, where technology meets agriculture to revolutionize the way we farm and produce food. Our system leverages the power of IoT (Internet of Things), data analytics, and automation to create a more efficient, sustainable, and productive farming environment.
                </p>
                <h2 className="about-subheading">Our Mission</h2>
                <p className="about-text">
                    Our mission is to empower farmers with innovative technology solutions that enhance productivity, reduce resource waste, and improve crop yields. We aim to contribute to a more sustainable future for agriculture, ensuring food security and environmental conservation.
                </p>
                <h2 className="about-subheading">How It Works</h2>
                <p className="about-text">
                    Our smart agriculture system integrates sensors, actuators, and data analytics to monitor and control various aspects of farming operations. By collecting real-time data on soil moisture, temperature, humidity, and other environmental factors, our system provides farmers with valuable insights into their crops' health and growth conditions.
                </p>
                <h2 className="about-subheading">Our Team</h2>
                <p className="about-text">
                    Our team consists of agriculture experts, engineers, and data scientists who are passionate about leveraging technology to transform agriculture. We are committed to delivering innovative solutions that address the evolving needs of farmers and contribute to a sustainable future for agriculture.
                </p>
                <h2 className="about-subheading">Get In Touch</h2>
                <p className="about-text">
                    Whether you're a farmer looking to adopt smart farming practices or a technology enthusiast interested in our work, we'd love to hear from you. Contact us to learn more about our smart agriculture system and how it can benefit you.
                </p>

            </div>
            <Footer />
        </div>
    )
}

export default AboutPage