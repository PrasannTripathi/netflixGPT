import React, { useEffect } from "react";
import logoImage from "../assets/images/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { toggleSearchGptView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import { addLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchGpt = useSelector((store) => store.gpt.searchGpt)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Optional: Add any additional sign-out logic here
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [dispatch, navigate]);

  const handleGptSearch = () => {
    dispatch(toggleSearchGptView());
  };

  const handleLanguageChange = (e) => {
     dispatch( addLanguage(e.target.value))
     
  }

  return (
    <div className="absolute  bg-gradient-to-b from-black w-full h-fit bg-opacity-30">
      <div className="flex items-center justify-between w-screen">
        <div className="max-h-24 flex items-center justify-center">
          <img  className="h-32 relative z-[1000]" src={logoImage} alt="Logo" />
        </div>
        <div>
          {user && (
            <div className="flex gap-5 absolute right-5 top-10 !z-[1000]">
             {searchGpt && <select onChange={handleLanguageChange} className="bg-slate-950 text-white rounded-lg">
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.identifire} value={lang.identifire}>
                    {lang.name}
                  </option>
                ))}
              </select>}
              <button
                onClick={handleGptSearch}
                className=" bg-violet-800 p-2 rounded-lg text-white"
              >
              { searchGpt ?"Gpt Search 🔍":"Home Page"}
              </button>
              <button
                className="bg-slate-900  ml-auto text-white p-2 rounded-lg mx-8"
                onClick={handleSignOut}
              >
                🤜Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
