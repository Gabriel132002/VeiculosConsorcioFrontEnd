import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timeout = setTimeout(() => {
      setShowNotification(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
