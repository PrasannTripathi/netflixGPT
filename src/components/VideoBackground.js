import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer.js";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo); // Access Redux state

  // Pass movieId to the custom hook, ensure it sets trailerVideo in the Redux store
  useMovieTrailer(movieId);

  return (
    <div className="w-full h-full">
      {trailerVideo && trailerVideo.key ? (
        <iframe
          className="w-full h-screen overflow-x-hidden"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
