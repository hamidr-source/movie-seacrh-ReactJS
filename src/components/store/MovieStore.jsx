import { create } from "zustand";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchMovie = async (searchItem, set) => {
  const url = `${baseUrl}?apikey=${apiKey}&s=${searchItem}`;

  if (!searchItem) {
    set({ movies: [], loading: false, error: null });
    return;
  }

  set({ loading: true, error: null });
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.Response === "True") {
      set({ movies: data.Search, loading: false, error: null });
    }
  } catch (error) {
    console.error("Fetch movie error:", error.message);
    set({ movies: [], loading: false, error: error.message });
  }
};

const useMovieSearchStore = create((set, get) => ({
  searchItem: "",
  movies: [],
  loading: false,
  error: null,

  setSearchItem: (term) => set({ searchItem: term }),

  clearMovies: () => set({ movies: [], error: null }),

  searchMovies: async () => {
    const state = get();
    console.log(set);
    await fetchMovie(state.searchItem, set);
  },
}));

export default useMovieSearchStore;
