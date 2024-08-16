import Proptype from "prop-types";
import { motion } from "framer-motion";

const CircularProgress = ({ progress = 90, radius = 120, stroke = 20 }) => {
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg className="transform -rotate-90 w-72 h-72">
        <circle
          cx="145"
          cy="145"
          r={normalizedRadius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-dark dark:text-light"
        />

        <motion.circle
          cx="145"
          cy="145"
          r={normalizedRadius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-brand dark:text-primary"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          initial={{
            strokeDashoffset: 660,
          }}
          whileInView={{
            strokeDashoffset: strokeDashoffset,
            transition: {
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        />
      </svg>
      <span className="absolute text-5xl text-brand dark:text-primary">{`${progress}%`}</span>
    </div>
  );
};
CircularProgress.propTypes = {
  radius: Proptype.number,
  stroke: Proptype.number,
  progress: Proptype.number,
};

export default CircularProgress;
