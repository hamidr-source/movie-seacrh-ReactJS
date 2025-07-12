import SpinningLoader from "./SpinningLoader ";

const ResultBox = ({ movies, loading, error }) => {
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white p-4 shadow-xl rounded-lg z-[51] overflow-y-auto max-h-96 custom-scrollbar">
      {loading ? (
        <div className="py-8 text-center">
          <SpinningLoader />
          <p className="mt-4 text-gray-600 text-lg">Searching for movies...</p>
        </div>
      ) : error ? (
        <div className="py-8 text-center text-red-500 text-lg">
          <p>Error: {error}</p>
          <p className="mt-2 text-sm text-gray-500">Please try again later.</p>
        </div>
      ) : movies && movies.length > 0 ? (
        <ul className="space-y-4">
          {movies.map((movie) => (
            <li
              key={movie.imdbID}
              className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer"
              onClick={() => console.log(movie.imdbID)}
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : ""}
                alt={movie.Title}
                className="w-16 h-24 object-cover rounded-md mr-4 flex-shrink-0 shadow-md"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">
                  {movie.Title}
                </h3>
                <p className="text-sm text-gray-500">{movie.Year}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-8 text-center text-gray-500 text-lg">
          <p>Start typing to search for movies!</p>
          <p className="mt-2 text-sm">No results found for your query.</p>
        </div>
      )}
    </div>
  );
};

export default ResultBox;
