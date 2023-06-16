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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed purus tincidunt, congue elit non, suscipit sem.</p>
          <p>Quisque ultricies, sapien nec vestibulum commodo, lectus odio scelerisque dui, at bibendum nunc dolor sed urna. Nullam at ipsum ut nunc mollis feugiat.</p>
          <p>Pellentesque in leo eget mauris facilisis sagittis non id quam. Donec egestas varius suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
