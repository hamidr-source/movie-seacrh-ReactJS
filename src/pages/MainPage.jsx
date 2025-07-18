import { useState } from "react";
import useMovieSearchStore from "../store/MovieStore";
import { AnimatePresence } from "framer-motion";
import SearchButton from "../components/SearchButton";
import ResultBox from "../components/ResultBox";
import ModalSearchBar from "../components/ModalSearchBar";
import { useNotifications } from "@toolpad/core/useNotifications";

const MainPage = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const notifications = useNotifications();
  const searchItem = useMovieSearchStore((state) => state.searchItem);
  const setSearchItem = useMovieSearchStore((state) => state.setSearchItem);
  const searchMovies = useMovieSearchStore((state) => state.searchMovies);
  const movies = useMovieSearchStore((state) => state.movies);
  const clearMovies = useMovieSearchStore((state) => state.clearMovies);
  const loading = useMovieSearchStore((state) => state.loading);
  const error = useMovieSearchStore((state) => state.error);

  const handleChangeValue = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchMovies = () => {
    if (searchItem.trim() === "") {
      notifications.show("Please enter a search term.", {
        severity: "warning",
        autoHideDuration: 3000,
      });
      return;
    }
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
    <div className="flex justify-center w-screen">
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
        {openSearchBar && searchItem && (
          <ResultBox
            movies={movies}
            loading={loading}
            error={error}
            onRouteChange={clearMovies}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainPage;
