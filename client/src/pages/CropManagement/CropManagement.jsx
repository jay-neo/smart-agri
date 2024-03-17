import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom';
import "./CropManagement.css"
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import api from '~/api'
import Notification from '../../components/Notification/Notification';


function JsonTable({ datas }) {
    if (!Array.isArray(datas) || datas.length === 0) {
        return <p>No data available</p>;
    }

    // Extract table headings from the first object
    const headings = Object.values(datas[0]);

    return (
        <div>

        <table className="json-table">
            <thead>
                <tr>
                    {headings.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {datas.slice(1).map((data, index) => (
                    <tr key={index}>
                        {Object.values(data).map((value, index) => (
                            <td key={index}>{value === null ? 'Nil' : value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
                </div>
    );
}



function CropManagement() {

    const [notification, setNotification] = useState({ type: '', message: '' });
    const [uid, setUid] = useState('');
    const [db, setDb] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res1 = await api.get(`/user`);
                const username = res1.data.username;
                setUid(username);
                const res2 = await api.get(`/user/${username}/db`);
                setDb(res2.data);
            } catch (error) {
                setNotification({ type: 'err', message: "Login to see your data" });
            }
        };

        fetchData();
    }, []);

    async function handleSyncDatabase() {
        try {
            const res = await api.get(`/user/${uid}/sync-db`);
            console.log(res.data);
            setDb(res.data);
        } catch (error) {
            setNotification({ type: 'res-err', message: error });
        }
    }

    return (
        <div>
            <NavBar />
            <Notification type={notification.type} message={notification.message} />

            {
                uid ? (
                    <div>
                        <div style={{ justifyContent: 'center', alignItems: 'center', padding: '200px 0 0 ' }}>
                            <button type="button" className='sync-button' onClick={handleSyncDatabase}>Sync Database</button>
                        </div>
                        <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>
                            <br /><h1 align="center">Your experimented data</h1><br />
                            <JsonTable datas={db.fieldData} />
                        </div>
                    </div>
                ) : (
                    <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px' }}>
                        <h1 align="center">Crop Management</h1>
                    </div>
                )
            }

            <Footer />
        </div>
    )
}



export default CropManagement