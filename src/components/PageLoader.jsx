import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const barVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: ["0%", "-100%", "0%"],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white  flex justify-center items-center z-[1000]">
      <motion.div
        className="flex space-x-1"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-6 h-8 bg-blue-600 rounded-full"
            variants={barVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PageLoader;
