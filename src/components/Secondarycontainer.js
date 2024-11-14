import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies, "okelfksdfs");
  
  return (
    <div>
      <div className="bg-black text-white py-[10%] px-[1%]">
        <MovieList title={"Now Playing"} movies={movies.getNowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        {/* <MovieList title = {"Now Playing"} movies = {movies.getNowPlayingMovies}/> */}
      </div>
    </div>
  );
};

export default Secondarycontainer;
