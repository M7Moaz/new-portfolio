import Proptype from "prop-types";
import { motion } from "framer-motion";
const Title = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        },
      }}
      className="text-center text-4xl sm:text-5xl uppercase text-brand dark:text-primary mb-12"
    >
      {children}
    </motion.div>
  );
};

Title.propTypes = {
  children: Proptype.node.isRequired,
};

export default Title;
