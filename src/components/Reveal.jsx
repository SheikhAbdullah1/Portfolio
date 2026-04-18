import { motion } from 'framer-motion';

export const Reveal = ({ children, direction = "up", delay = 0, className="" }) => {
  const hiddenVariants = {
    up: { opacity: 0, y: 30 },
    left: { opacity: 0, x: -30, y: 12 },
    right: { opacity: 0, x: 30, y: 12 },
  };

  const visibleVariants = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0, y: 0 },
    right: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: hiddenVariants[direction],
        visible: visibleVariants[direction]
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.85, delay: delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
