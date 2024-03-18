import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const navigate = useNavigate();
  return (
    <div className="m-20 ">
      <div>
        <h1>Type Tester</h1>
        <h2>Ready to test your pokemon knowledge?</h2>
        <h2>How to play</h2>
        <p>
          A random wild pokemon will appear. Choose a type that will be
          supereffective againt the wild pokemon.
        </p>
        <p>Ready to test your type knowledge? sign up or login to play.</p>
      </div>
      <div className="btn-container flex flex-row justify-center gap-2">
        <button
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          onClick={() => navigate(`/signup`)}
        >
          Sign Up
        </button>
        <button
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default HomePage;
