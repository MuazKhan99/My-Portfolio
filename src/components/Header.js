import React from 'react';
import { Link } from 'react-scroll';
import FadeInOut from './FadeInOut';

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = "https://muazkhan99.github.io/My-Portfolio/Muhammad_Muaz_Khan's_Resume.pdf";
  link.download = "Muhammad_Muaz_Khan's_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <FadeInOut>
          <h1>Muhammad Muaz Khan</h1>
        </FadeInOut>
        <FadeInOut>
          <h2>Software Developer</h2>
        </FadeInOut>
        <button className="download-button" onClick={handleDownloadResume}>
          Download Resume
        </button>
      </div>
    </header>
  );
};

export default Header;
