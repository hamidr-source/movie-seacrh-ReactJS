import { create } from "zustand";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchMovie = async (searchItem) => {
  const url = `${baseUrl}?apikey=${apiKey}&s=${searchItem}`;

  if (!searchItem) {
    return;
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Network response was not ok")  
    }
    const data = response.json()
    console.log(data)
  } catch (error) {
    throw new Error(error.massage)  
  }
};

const useMovieSearch = create((set) => ({
  searchItem: "",
  movies: [],
  loading: false,
  error: null,

  setSearchItem: (term) => set({ searchItem: term }),
}));

export default useMovieSearch;
