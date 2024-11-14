import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcoming();
  }, []);

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies
