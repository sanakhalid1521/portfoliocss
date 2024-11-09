
'use client';
import React, { useState } from 'react';
import styles from '../style/contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setSuccess(true);
    setError('');
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          {/* Name Field */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
            />
          </div>

          {/* Email Field */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
          </div>

          {/* Message Field */}
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textareaField}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        {error && <div className={styles.errorMessage}>{error}</div>}
        {success && <div className={styles.successMessage}>Your message has been sent successfully!</div>}
      </div>
    </section>
  );
}
