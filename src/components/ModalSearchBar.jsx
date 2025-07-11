import { motion } from "framer-motion";

const ModalSearchBar = ({
  onClose,
  searchItem,
  handleChangeValue,
  handleKeyPress,
  handleSearchMovies,
}) => {
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const searchBarVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    visible: {
      y: "30%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      },
    },
  };
  return (
    <div>
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      />
      <motion.div
        className="p-4 rounded shadow-md text-xl fixed top-0 left-0 w-full z-50 "
        variants={searchBarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            value={searchItem}
            onChange={handleChangeValue}
            onKeyDown={handleKeyPress}
            id="value"
            className="w-1/2 h-10 outline-none p-2 rounded-lg border"
          />
          <button className="absolute right-4" onClick={handleSearchMovies}>
            search
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalSearchBar;
