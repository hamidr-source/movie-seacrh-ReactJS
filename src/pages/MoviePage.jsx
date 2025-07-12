import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState();
  const url = `${baseUrl}?apikey=${apiKey}&i=${params.id}&plot=full`;

  const fetchData = async () => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Someting")
    }
    console.log(movie)
  };

  useEffect(() => {
    fetchData()
  }, [movie])

  return <div></div>;
};

export default MoviePage;
