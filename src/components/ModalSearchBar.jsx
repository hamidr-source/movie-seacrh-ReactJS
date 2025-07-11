import { motion } from "framer-motion";

const SearchBarModal = ({
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
      y: "0%",
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
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-start">
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      />

      <motion.div
        className="w-full max-w-2xl bg-white p-4 shadow-lg rounded-b-lg relative z-50 transform pt-2 sm:pt-4"
        variants={searchBarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="relative flex items-center justify-center max-w-xl mx-auto">
          <input
            type="text"
            value={searchItem}
            onChange={handleChangeValue}
            onKeyDown={handleKeyPress}
            id="value"
            placeholder="Search for movies..."
            className="w-full h-12 px-4 pr-24 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />

          <button
            onClick={handleSearchMovies}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 md:py-2 md:px-6 rounded-full transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBarModal;
