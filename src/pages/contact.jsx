import React, { useState } from 'react';

const Contact = () => {
  const [emailError, setEmailError] = useState('');

  const validateEmail = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Invalid email address');
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" onBlur={validateEmail} required />
          {emailError && <span>{emailError}</span>}
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
