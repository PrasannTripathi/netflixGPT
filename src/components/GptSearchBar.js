import React, { useRef } from "react";
import bgImage from "../assets/images/netflix-background.jpg";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";


const GptSearchBar = () => {
  const searchGpt = useRef()
  const langKey = useSelector((store) => store.config.lang)
  const handleOpenaiSubmit =  () => {
    console.log(searchGpt.current.value);


    
    
  }
  return (
    <div>
      <div
        className="h-screen flex justify-center "
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* <img src={bgImage}/> */}
        <form onSubmit={(e) => e.preventDefault()} className="bg-black text-blue-600 font-bold rounded-md p-4 flex gap-8 w-[600px] justify-center h-fit relative top-[150px]">
          <input
          ref={searchGpt}
            className="p-2 w-[400px] outline-none border placeholder-blue-600 border-violet-800 placeholderr"
            type="text"
            placeholder={lang.hindi.placeholder}
          />
          <button onClick={handleOpenaiSubmit} className="bg-violet-800 text-white font-bold p-2 rounded-lg w-[80px]">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
