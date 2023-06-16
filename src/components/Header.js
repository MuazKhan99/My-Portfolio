import React from 'react';
import { Link } from 'react-scroll';
import FadeInOut from './FadeInOut';

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
      </div>
    </header>
  );
}

export default Header;
