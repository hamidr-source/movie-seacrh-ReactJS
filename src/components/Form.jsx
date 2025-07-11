import useMovieSearchStore from "./store/MovieStore";

const Form = () => {
  const searchItem = useMovieSearchStore((state) => state.searchItem);
  const setSearchItem = useMovieSearchStore((state) => state.setSearchItem);
  const searchMovies = useMovieSearchStore((state) => state.searchMovies);

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
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleChangeValue}
        onKeyDown={handleKeyPress}
        id="value"
      />
      <button onClick={handleSearchMovies}>search</button>
    </div>
  );
};

export default Form;
