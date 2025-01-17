import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";


const MainContainer = () => {
     const movies = useSelector((store) => store.movies?.getNowPlayingMovies)
     // console.log(movies);
     if(!movies) return
     const mainMovies = movies[2]
     // console.log(mainMovies);
     const {original_title,overview,id} = mainMovies
     
  return (
    <div className="h-[80vh] w-screen">
      <VideoTitle title = {original_title} overView = {overview}/>
      <VideoBackground movieId = {id}/>
    </div>
  );
};

export default MainContainer;
