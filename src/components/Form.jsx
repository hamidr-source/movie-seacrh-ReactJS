import { useState } from "react";
import useMovieSearchStore from "./store/MovieStore";
import Fab from "@mui/material/Fab";
import SearchIcon from "@mui/icons-material/Search";
import { AnimatePresence, motion } from "framer-motion";

const Form = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const searchItem = useMovieSearchStore((state) => state.searchItem);
  const setSearchItem = useMovieSearchStore((state) => state.setSearchItem);
  const searchMovies = useMovieSearchStore((state) => state.searchMovies);

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

  const handleChangeValue = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchMovies = () => {
    searchMovies();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  };

  return (
    <>
      <motion.button
        className="mt-20 rounded-3xl"
        animate={{
          x: [2, 3, -3, 3, -3, 2],
          rotate: [2, 3, -3, 3, -3, 2],
          boxShadow: [
            "0 0px 0px rgba(0, 0, 0, 0.0)",
            "0 0px 20px rgba(76, 175, 80, 0.6)",
            "0 0px 0px rgba(0, 0, 0, 0.0)",
          ],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Fab variant="extended" onClick={() => setOpenSearchBar(true)}>
          <SearchIcon />
        </Fab>
      </motion.button>
      <AnimatePresence>
        {openSearchBar && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setOpenSearchBar(false)}
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
                <button
                  className="absolute right-4"
                  onClick={handleSearchMovies}
                >
                  search
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Form;
