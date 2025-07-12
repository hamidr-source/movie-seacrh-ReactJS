import { motion } from "framer-motion";

const SpinningLoader = () => {
  
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 1.2,
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-24">
      <motion.div
        className="relative w-16 h-16 rounded-full flex items-center justify-center"
        variants={spinnerVariants}
        animate="animate"
        style={{
          border: "4px solid rgba(59, 130, 246, 0.2)",
          borderTop: "4px solid #3B82F6",
          borderRight: "4px solid #3B82F6",
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
        }}
      ></motion.div>
      <div className="absolute text-blue-500 text-xs font-semibold">
        Loading
      </div>
    </div>
  );
};

export default SpinningLoader;
