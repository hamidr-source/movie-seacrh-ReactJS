import { useState } from "react";
import useMovieSearchStore from "./store/MovieStore";
import { AnimatePresence } from "framer-motion"; 
import SearchButton from "./SearchButton";
import ResultBox from "./ResultBox"; 
import ModalSearchBar from "./ModalSearchBar";

const Form = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const searchItem = useMovieSearchStore((state) => state.searchItem);
  const setSearchItem = useMovieSearchStore((state) => state.setSearchItem);
  const searchMovies = useMovieSearchStore((state) => state.searchMovies);
  const movies = useMovieSearchStore((state) => state.movies);
  const clearMovies = useMovieSearchStore((state) => state.clearMovies);

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

  const handleCloseSearchBar = () => {
    setOpenSearchBar(false);
    setSearchItem("");
    clearMovies();
  };

  return (
    <>
      <SearchButton onOpenSearchBar={() => setOpenSearchBar(true)} />

      <AnimatePresence>
        {openSearchBar && (
          <ModalSearchBar
            onClose={handleCloseSearchBar}
            searchItem={searchItem}
            handleChangeValue={handleChangeValue}
            handleKeyPress={handleKeyPress}
            handleSearchMovies={handleSearchMovies}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openSearchBar && searchItem && <ResultBox movies={movies} />}
      </AnimatePresence>
    </>
  );
};

export default Form;
