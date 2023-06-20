import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <p>I recently graduated from the University of Kristianstad, where I obtained a Bachelor's degree in Software Development. As a goal-oriented individual, I bring forth a strong dedication, passion, and knowledge to every task assigned to me. My unwavering commitment to success and my drive to excel in my field motivate me to continuously enhance my skills and knowledge.</p>
          <p>During my academic journey, I had the opportunity to undertake a significant project with Volvo Cars, focusing on the application of graph-based theory to detect error patterns in software updates for cars. This experience allowed me to gain valuable insights into the practical aspects of software development and the importance of meticulous error analysis. Additionally, I gained hands-on experience as an Android Developer at Softhouse, where I contributed to the development of an event planning app. Furthermore, I honed my skills as a Development Intern at Revam AB, where I actively participated in modifying website designs and organizing databases.</p>
          <p>My technical skill set encompasses a wide range of technologies, including proficiency in Java, JavaScript, Python, and Kotlin. I am well-versed in mobile app development, utilizing frameworks such as Flask and implementing web technologies such as HTML, CSS, and React with Material UI. Moreover, I have hands-on experience with Node.js, MySQL, SQLAlchemy, SQLite, MongoDB, and Neo4j databases. Additionally, I possess knowledge in areas such as Wireshark, Scrum, and CyberSecurity, which further enhances my ability to tackle complex challenges.</p>
          <p>In addition to my technical expertise, I am proficient in English and have a limited working proficiency in Swedish. This enables effective communication and collaboration within international teams and allows me to adapt to diverse work environments.</p>
          <p>I am constantly driven to learn and grow, seeking new opportunities to apply my skills and contribute to innovative projects. With a strong foundation in software development and a passion for excellence, I am eager to embark on new challenges and make a positive impact in the field.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
