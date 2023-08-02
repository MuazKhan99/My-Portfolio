import React from 'react';
import { Zoom } from 'react-reveal';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <Zoom>
          <h2>Projects</h2>
          <div className="project">
            <h3>Volvo Cars Thesis Project</h3>
            <p>During my studies at the University of Kristianstad, I completed a Bachelor's thesis project with Volvo Cars. The project focused on applying graph-based theory to detect error patterns in software updates for cars. I built a Neo4j graph database using their data and utilized advanced analysis techniques to identify and analyze errors.</p>
            <p>Technologies used: Neo4j, Python, Cypher</p>
          </div>
          <div className="project">
            <h3>Event Planning App</h3>
            <p>As an Android Developer at Softhouse, I collaborated with a group to develop an event planning app. I played a crucial role in implementing key features, including setting up a sign-in button, integrating a Firebase database, and ensuring user-friendly functionality.</p>
            <p>Technologies used: Kotlin, Android Studio, Firebase</p>
          </div>
          <div className="project">
            <h3>Revam AB Website Modification</h3>
            <p>During my internship at Revam AB, I contributed to the modification of their website design. I was responsible for creating a webpage that incorporated a feedback form, enhancing user engagement and interaction. Additionally, I assisted in organizing the backend database to optimize data management.</p>
            <p>Technologies used: HTML, CSS, JavaScript</p>
          </div>
          <div className="project">
            <h3>IKEA Student Day Event</h3>
            <p>I actively participated in IKEA's Student Day event, where I provided valuable insights on reaching out to the young adult population and increasing engagement with the IKEA brand. I recommended strategies such as improving advertisements, enhancing the website's aesthetics, and fostering more frequent and personalized customer interactions.</p>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Projects;
