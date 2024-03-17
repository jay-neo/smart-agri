import React, { useState } from 'react';
import './Notification.css'
const Notification = ({ type, message }) => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
    };

    

    let notify = message;
    switch (type) {
        case "ok":
        case "err":
            break;
        case "res-ok":
            try {
                notify = message.data.message;
            } catch (error) { }
            break;
        case "res-err":
            notify = message.response ? message.response.data.message : "Server is down!";
            break;
        default:
            return;
            break;
    }

    return (
        <div>
            {isVisible && (
                <div className="notification-container">
                    <div className={`notification ${type}`}>
                        <span>{notify}</span>
                        <button className="close-btn" onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notification;
