import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import classes from './Success.module.css';
const url = "https://formspree.io/f/mldryvgp"
const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading');
  const [formData, setFormData] = useState({})

  const handleFormspreeSubmission = async () => {
    // Retrieve form data from localStorage
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }

    // Remove the data from localStorage if it is sensitive
    localStorage.removeItem('formData')

    try {
      const response = await fetch("https://formspree.io/f/xnnqnlvr", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(storedData)
      });

      if (response.ok) {
        // console.log('Form submitted successfully!');
        setStatus('success')
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  useEffect(() => {

    const sessionId = searchParams.get('session_id');
    if (!sessionId) {
      navigate('/');
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch('/.netlify/functions/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        if (response.ok) {
          // setStatus('success');
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
      {/* <div className={classes.successContainer}> */}
      {status === 'loading' && <p>Processing your payment...</p>}
      {status === 'success' && (
        <>
          <h1>Thank You!</h1>
          <p style={{ fontSize: 24 }}>Your priority application has been received.</p>
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
