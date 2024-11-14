import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    getNowPlayingMovies: null,
    addTrailerVideo: null,
  
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.getNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    trailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload; // Set the trailer video
    },
  },
});

export const { addNowPlayingMovies, trailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
