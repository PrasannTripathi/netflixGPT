import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { trailerVideo as setTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      fetchMovieTrailer();
    }
  }, [movieId]);

  const fetchMovieTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTION
      );

      const json = await response.json();
      // console.log(json);

      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData[0] || null; // Handle case where no trailer is found
      dispatch(setTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };
};

export default useMovieTrailer;
