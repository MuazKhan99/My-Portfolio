import { motion } from 'framer-motion';

const FadeInOut = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInOut;
