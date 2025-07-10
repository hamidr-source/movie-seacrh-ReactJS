import { create } from "zustand";

const useMovieSearch = create((set) => ({
  searchItem: "",
  movies: [],
  loading: false,
  error: null,

  setSearchItem: (term) => set({ searchItem: term }),
  
}));

export default useMovieSearch;
