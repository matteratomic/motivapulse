import React, { useState } from 'react';
import classes from './index.module.css';

const CookieModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const acceptCookies = () => {
    // Here you would typically set a cookie or local storage item
    console.log("Cookies accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Here you would typically handle the decline action
    console.log("Cookies declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
        <div className={classes.buttons}>
          <button onClick={acceptCookies} className={classes.acceptButton}>Accept</button>
          <button onClick={declineCookies} className={classes.declineButton}>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
