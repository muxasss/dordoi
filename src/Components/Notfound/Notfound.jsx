import React from 'react';
import './Notfound.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">404</h1>
        <p className="not-found-message">Oops! The page you are looking for doesn't exist.</p>
        <a href="/" className="back-home-link">Back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
