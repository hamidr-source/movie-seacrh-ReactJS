import { motion } from "framer-motion";

const AnimatedBackGround = ({ imageUrl }) => {
  const containerVariants = {
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 0.5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden rounded-b-lg">
      <motion.div
        className="w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      />
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-30"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default AnimatedBackGround;
