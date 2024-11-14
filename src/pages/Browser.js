import { useSelector } from "react-redux";
import GptSearchView from "../components/GptSearchView";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import Secondarycontainer from "../components/Secondarycontainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browser = () => {
  const searchGpt = useSelector((store) => store.gpt.searchGpt);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {searchGpt ? (
        <GptSearchView />
      ) : (
        <>
          <MainContainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browser;
