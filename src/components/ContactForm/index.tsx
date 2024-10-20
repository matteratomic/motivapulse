import classes from './index.module.css';

const ContactForm = () => {
  return (
    <div id="contact" className={classes.formContainer}>
      <h2 className={classes.heading}>Get in Touch</h2>
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />

        <div className={classes.formGroup}>
          <label htmlFor="name" className={classes.label}>Name</label>
          <input type="text" id="name" name="name" required className={classes.input} />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="email" className={classes.label}>Email</label>
          <input type="email" id="email" name="email" required className={classes.input} />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="phone" className={classes.label}>Phone Number</label>
          <input type="tel" id="phone" name="phone" className={classes.input} />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="subject" className={classes.label}>Subject</label>
          <input type="text" id="subject" name="subject" required className={classes.input}
          />
          <small>
            *Please enter your business name followed by your average revenue, separated by a space.
          </small>
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="date" className={classes.label}>Preferred Date</label>
          <input type="date" id="date" name="date" className={classes.input} />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="time" className={classes.label}>Preferred Time</label>
          <input type="time" id="time" name="time" className={classes.input} />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="message" className={classes.label}>Message</label>
          <textarea id="message" name="message" required className={classes.textarea}></textarea>
          <small>
            *Briefly describe what you're looking for and how we can assist you. If you're unsure, that's okay—this helps us prepare and ensures a smooth and efficient onboarding process.
          </small>
        </div>

        <div className={classes.buttonGroup}>
          <button type="submit" className={`${classes.button} ${classes.freeButton}`} name="submission-type" value="free">Send Message</button>
          <button type="submit" className={`${classes.button} ${classes.priorityButton}`} name="submission-type" value="priority">Send PRIORITY Message- $1</button> 
        </div>
<small style={{display:'block',paddingTop:"16px"}}>
*We do this to maintain quality control, as we've been receiving many applications. This ensures that your request is seen amongst the daily influx of applicants.
          </small>
      </form>

      <p className={classes.note}>By choosing priority, your application will have a 62% higher chance of approval. Spaces are limited, so act fast to secure your spot!</p>
    </div>
  );
};

export default ContactForm;
