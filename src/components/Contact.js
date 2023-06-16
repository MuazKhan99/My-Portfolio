import React from 'react';

// Import icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact'>
        <div className="contact-links">
          <a href="https://github.com/MuazKhan99" target="_blank" rel="noopener noreferrer">
            <FaGithub size={100} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-muaz-khan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={100} />
          </a>
          <a href="mailto:muazkhan1999@icloud.com">
            <MdEmail size={100} />
          </a>
        </div>
        </section>
  );
}

export default Contact;
