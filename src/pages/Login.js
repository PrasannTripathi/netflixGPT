import React, { useRef, useState } from "react";
import Header from "../components/Header";
import netflixBackground from "../assets/images/netflix-background.jpg";
import { ValidateData } from "../components/ValidateData";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; // Ensure `auth` is correctly initialized in firebase.js
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleForm = () => {
    setSignInForm(!signInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleValidation = () => {
    // Validate inputs
    const message = ValidateData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(message);
    if (message) return; // If there's a validation error, stop here

    if (!signInForm) {
      // Sign-Up
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed up successfully:", user);
         
        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
        });
    } else {
      // Sign-In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed in successfully:", user);
          
        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img className="h-full zoom-in" src={netflixBackground} alt="Netflix Background" />
      </div>
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative bg-[rgba(12,13,13,0.7)] w-3/12 flex flex-col p-4 gap-5 px-[3%] rounded-lg fade-in"
        >
          <h1 className="text-white font-bold text-3xl">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!signInForm && (
            <input
              ref={name}
              className="p-3 bg-[rgba(22,22,22,0.7)] border border-white rounded-lg text-white slide-up"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-3 bg-[rgba(22,22,22,0.7)] border border-white rounded-lg text-white slide-up"
            type="text"
            placeholder="Enter Email or Number"
          />
          <input
            ref={password}
            className="p-3 bg-[rgba(22,22,22,0.7)] border border-white rounded-lg text-white slide-up"
            type="password"
            placeholder="Enter Password"
          />
          <button
            className="bg-[rgb(229,9,20)] p-2 rounded-lg text-white font-semibold slide-up"
            onClick={handleValidation}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-600 font-bold text-xl">{errorMessage}</p>
          <div className="flex items-center justify-center fade-in">
            <p className="text-white">OR</p>
          </div>
          <button
            className="bg-[rgba(250,252,251,0.2)] p-2 rounded-lg text-white font-semibold fade-in"
            type="button"
          >
            Use a sign-in code
          </button>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label className="text-white">Remember Me</label>
            </div>
            <div>
              <a className="text-white" href="#">
                Forgot Password
              </a>
            </div>
          </div>
          <div>
            <p className="text-white cursor-pointer" onClick={handleForm}>
              {signInForm
                ? "New to Netflix? Sign up now"
                : "Already Registered? Sign in now"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
