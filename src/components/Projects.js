import React from 'react';
import { Zoom } from 'react-reveal';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <Zoom>
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed purus tincidunt, congue elit non, suscipit sem.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Quisque ultricies, sapien nec vestibulum commodo, lectus odio scelerisque dui, at bibendum nunc dolor sed urna.</p>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Projects;
