import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classes from './index.module.css'

// const url = "https://formspree.io/f/xnnqnlvr"
const url = "https://formspree.io/f/mldryvgp"
const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading');

  const handleFormspreeSubmission = async () => {
    // Retrieve form data from localStorage
    const formData = new FormData()
    const storedData = localStorage.getItem('formData');
    let contactData = {}

    if (storedData) {
      contactData = JSON.parse(storedData)
    }

    // Remove the data from localStorage if it is sensitive
    for (let key in contactData) {
      formData.append(key, contactData[key])
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success')
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    finally {
      localStorage.removeItem('formData')
    }
  };

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    const isPriority = searchParams.get('is_priority');

    if (!isPriority) {
      return setStatus('success')
    }

    if (!sessionId) {
      navigate('/');
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch('/.netlify/functions/verify-payment', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        if (response.ok) {
          handleFormspreeSubmission()
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setStatus('error');
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: 'center'
    }}>
      {status === 'loading' && <p>Processing your payment...</p>}
      {status === 'success' && (
        <>
          <div className={classes.content}>
            <div className={classes.wrapper1}>
              <div className={classes.wrapper2}>
                <h1 className={classes.header}>Thank you !</h1>
                <p>Your application has been received.</p>
                <p>We are going to contact you soon.</p>
                <button
                  onClick={() => navigate('/')}
                  className={classes.goHome}>
                  go home
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {status === 'error' && (
        <>
          <h1>Something went wrong</h1>
          <p style={{ fontSize: 24 }}>Please contact support if you were charged.</p>
          <button
            style={{
              marginTop: 20,
              background: 'transparent',
              padding: 16,
              borderRadius: 10
            }}
            onClick={() => navigate('/')}>Return Home</button>
        </>
      )}
    </div>
  );
};

export default Success;
