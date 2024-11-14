import React from "react";
import MovieCard from "./movieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="my-4 px-4">
      <h1 className="text-lg font-semibold mb-2 ">{title}</h1>
      <div className="overflow-x-auto no-scroll ">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
