// src/components/Contact.js
import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <h1 className='ph'>Contact Page</h1>




      <main>
        <section class="contact-info">
            <h2>Get in Touch</h2>
            <p>If you have any questions or need support, please reach out to us through the following channels:</p>
            <ul>
                <li><strong>Email:</strong> support@facebook.com</li>
                <li><strong>Phone:</strong> +1 800 123 4567</li>
                <li><strong>Address:</strong> 1 Hacker Way, Menlo Park, CA 94025, USA</li>
            </ul>
        </section>

        <section class="contact-form">
            <h2>Send Us a Message</h2>
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>
<br/><br/><br/>
    <footer>
        <p>&copy; 2024 Facebook, Inc. All rights reserved.</p>
    </footer>

    </div>
  );
};

export default Contact;