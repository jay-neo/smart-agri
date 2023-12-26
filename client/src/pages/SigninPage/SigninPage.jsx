import React, { useState } from 'react';
import "./SigninPage.css"

const SigninPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your sign-up logic here
        console.log('Sign-up logic goes here');
    };

    return (
        <div className='signin'>
            <div className="navbar-title-signin">
                <a href="/"><h2>Smart Agri-AI</h2></a>
            </div>
            <div className="signup-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name*</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name*</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number*</label>
                        <input
                            type="number"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="retypePassword">Retype the Password*</label>
                        <input
                            type="password"
                            id="retypePassword"
                            value={retypePassword}
                            onChange={(e) => setRetypePassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SigninPage;
