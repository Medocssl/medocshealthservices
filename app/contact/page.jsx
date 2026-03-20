import React from 'react';
import './Contact.css';

const Contact = () => {
  const phoneNumber = '+1234567890'; // Replace with the hotline phone number
  const whatsappNumber = '+0987654321'; // Replace with the WhatsApp careline number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <div className="hotline-container">
        <button onClick={() => window.open(`tel:${phoneNumber}`)}>Call Hotline</button>
        <button onClick={handleWhatsAppClick}>WhatsApp Careline</button>
      </div>
    </div>
  );
};

export default Contact;