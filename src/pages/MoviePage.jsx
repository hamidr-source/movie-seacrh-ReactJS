import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviePosterHeader from "../components/MoviePosterHeader";
import PageLoader from "../components/PageLoader";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = `${baseUrl}?apikey=${apiKey}&i=${params.id}&plot=full`;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError(data.Error || "Movie not found");
        setMovie(null);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching the movie data.");
      setMovie(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-500 text-xl">
          Movie Not Found!
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MoviePosterHeader
        posterUrl={movie.Poster}
        title={movie.Title}
        year={movie.Year}
        rating={movie.imdbRating}
        duration={movie.Runtime}
        ageRestriction={movie.Rated}
        country={movie.Country}
      />
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Plot</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{movie.Plot}</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Actors</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {movie.Actors &&
            movie.Actors.split(", ").map((actor, index) => (
              <span
                key={index}
                className="bg-gray-200 px-4 py-2 rounded-full text-gray-700"
              >
                {actor}
              </span>
            ))}
        </div>
        <p className="text-gray-700 mb-6">Writer: {movie.Writer}</p>
        <p className="text-gray-700 mb-6">Director: {movie.Director}</p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Watch</h2>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 mb-6">
          Choose
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
