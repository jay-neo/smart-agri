import React, { useState } from 'react';
import "./SigninPage.css"
import axios from 'axios';
import Notification from '../../components/Notification/Notification';
import { useNavigate } from "react-router-dom";



const SigninPage = () => {

    const axiosConfig = {
        headers: {
            "Content-type": "application/json",
        },
        withCredentials: true,
    };

    const navigate = useNavigate();
    const [notification, setNotification] = useState({ type: '', message: '' });


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        retypePassword: ''
    });
    const [passwordError, setPasswordError] = useState('');
    const [retypePasswordError, setRetypePasswordError] = useState('');




    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handlePasswordChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        if (value.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else {
            setPasswordError('');
        }
    };

    const handleRetypePasswordChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        if (formData.password !== value) {
            setRetypePasswordError('Passwords do not match');

        } else {
            setRetypePasswordError('');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.retypePassword) {
            setNotification({ type: 'err', message: "Passwords do not match" });
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/signin', formData, axiosConfig);
            setNotification({ type: 'res-ok', message: res });
            setFormData({
                name: '',
                email: '',
                password: '',
                retypePassword: ''
            });
            navigate('/');
            window.location.reload();
        } catch (error) {
            setNotification({ type: 'res-err', message: error });
            setFormData({
                name: '',
                email: '',
                password: '',
                retypePassword: ''
            });
        }
    };



    const isSubmitDisabled = (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.retypePassword ||
        formData.password !== formData.retypePassword
    );





    return (
        <>
            <div className='signin'>

                <Notification type={notification.type} message={notification.message} /><br />

                <div className="navbar-title-signin">
                    <a href="/"><h2>Smart Agri-AI</h2></a>
                </div>
                <div className="signup-container">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handlePasswordChange}
                                required
                            />
                            {passwordError && <p className="error">{passwordError}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="retypePassword">Retype Password</label>
                            <input
                                type="password"
                                id="retypePassword"
                                value={formData.retypePassword}
                                onChange={handleRetypePasswordChange}
                                required
                            />
                            {retypePasswordError && <p className="error">{retypePasswordError}</p>}
                        </div>

                        <div className="form-group">
                            <button
                                type="submit"
                                disabled={isSubmitDisabled}
                                style={isSubmitDisabled ?
                                    { backgroundColor: '#007bff', color: 'white', cursor: 'default' }
                                    : {}
                                }
                            >Sign Up</button>
                        </div>
                    </form>
                </div>


            </div>
        </>
    );


};

export default SigninPage;
