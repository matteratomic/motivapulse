import React, { useState } from 'react';
import classes from "./index.module.css";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// import React, { useState } from 'react';
import { Send } from 'lucide-react';
// import classes from './index.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={classes.newsletterContainer}>
      <h3 className={classes.newsletterTitle}>Stay Informed</h3>
      <p className={classes.newsletterDescription}>
        Subscribe to our newsletter for the latest in AI + Human innovation
      </p>
      <form onSubmit={handleSubmit} className={classes.newsletterForm}>
        <div className={classes.inputGroup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={classes.newsletterInput}
          />
          <button type="submit" className={classes.subscribeButton} disabled={isSubmitted}>
            {isSubmitted ? 'Subscribed!' : <Send size={20} />}
          </button>
        </div>
      </form>
      {isSubmitted && (
        <p className={classes.successMessage}>Thank you for subscribing!</p>
      )}
    </div>
  );
};

// export default Newsletter;

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.topSection}>
          <div className={classes.logoSection}>
            <h3 id="logo">MotivaPulse</h3>
            <p>© 2024 MotivaPulse AI. All rights reserved.</p>
          </div>
          <div className={classes.linksSection}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
            <a href="/careers">Career Opportunities</a>
            <a href="/partners">Partner With Us</a>
            <a href="/partners">Our Generous Offerings</a>
          </div>
        </div>
        <div className={classes.middleSection}>
          <div className={classes.socialSection}>
            <p>Follow us on:</p>
            <div className={classes.socialIcons}>
              <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            </div>
          </div>
          <div className={classes.newsletterSection}>
            <p>Subscribe to our newsletter for the latest in AI + Human innovation</p>
            <form onSubmit={handleSubmit} className={classes.subscribeForm}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button style={{fontWeight:"bold"}} type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
