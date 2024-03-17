import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '~/api'
import Navbar from '../../components/Navbar/Navbar';
import './ProfilePage.css'
import Notification from '../../components/Notification/Notification';



const ProfilePage = () => {

    const navigate = useNavigate();
    const [notification, setNotification] = useState({ type: '', message: '' });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        thingspeakChannel: '',
        thingspeakAPI: '',
        calcGap: '',
    });

    let { uid } = useParams();
    api.get('/user').then((res) => {
        if(uid !== res.data.username) {
            navigate('/');
        }
    }).catch((error) => {
        setNotification({ type: 'res-err', message: error });
    })
    
    
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            const res = await api.put(`/user/${uid}/user-data`, formData);
            setFormData({
                name: res.data.name,
                email: res.data.email,
                thingspeakChannel: res.data.thingspeakChannel,
                thingspeakAPI: res.data.thingspeakAPI,
                calcGap: res.data.calcGap,
            });
            setNotification({ type: 'res-ok', message: res });
        } catch (error) {
            setIsEditing(false);
            navigate('/');
            setNotification({ type: 'res-err', message: error });
        }
        setIsEditing(false);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name !== 'email') {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    useEffect(() => {
        return async () => {
            try {
                let checkRes = await api.get('/user');
                const res = await api.get(`/user/${uid}/user-data`);
                setFormData({
                    name: res.data.name,
                    email: res.data.email,
                    thingspeakChannel: res.data.thingspeakChannel,
                    thingspeakAPI: res.data.thingspeakAPI,
                    calcGap: res.data.calcGap,
                });
            } catch (err) {
                navigate('/');
                setNotification({ type: 'res-err', message: error });
            }
        }
    }, [isEditing])


    return (
        <div>
            <Navbar />
            <Notification type={notification.type} message={notification.message}/>
            <div className='outter-div' style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>

                <h2>User Profile</h2> <br />
                {isEditing ? (
                    <form>
                        <p>Email: {formData.email}</p><br />
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </label><br />
                        <label>
                            Thingspeak Channel:
                            <input type="text" name="thingspeakChannel" value={formData.thingspeakChannel} onChange={handleChange} />
                        </label>
                        <label>
                            Thingspeak API:
                            <input type="text" name="thingspeakAPI" value={formData.thingspeakAPI} onChange={handleChange} />
                        </label>
                        <label>
                            Measurement Gap (in hours):
                            <input type='number' name="calcGap" value={formData.calcGap} onChange={handleChange} required />
                        </label><br />
                        <button type="button" onClick={handleSaveClick}>Save</button>
                    </form>
                ) : (
                    <div className='user-data-view'>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Thingspeak Channel:</strong> {formData.thingspeakChannel}</p>
                        <p><strong>Thingspeak API:</strong> {formData.thingspeakAPI}</p>
                        <p><strong>Measurement Gap:</strong> {formData.calcGap}</p>
                        <button type="button" onClick={handleEditClick}>Edit</button>
                    </div>
                )}
            </div>

        </div>
    );
};


export default ProfilePage;