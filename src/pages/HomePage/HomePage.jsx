import React from "react";
import "./HomePage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";

function HomePage(props) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out ");
    }
  }
  return (
    <div>
      <section className="nav-menu">
        <div className="title-container flex flex-col flex-wrap content-center mt-14 items-center">
          <h1 className="title font-custom text-4xl transition-transform duration-300 hover:translate-y-[-5px] hover:rainbow">
            Super Type Tester
          </h1>
          <div className="btn-container flex flex-row gap-4 content-center mt-2 ">
            <button
              className="signup-btn font-custom text-xl transition-transform duration-300 hover:translate-y-[-5px]"
              onClick={() => navigate(`/signup`)}
            >
              Login
            </button>
            <button
              className="login-btn font-custom text-xl transition-transform duration-300 hover:translate-y-[-5px]"
              onClick={() => navigate("/login")}
            >
              Signup
            </button>
            <button
              className="font-custom text-xl transition-transform duration-300 hover:translate-y-[-5px]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </section>
      <section className="instructions max-w-prose mx-auto mt-8 px-4 ">
        <p className="font-custom text-2xl text-left border-bottom mb-2">
          How To Play
        </p>
        <p className="font-custom text-lg leading-relaxed text-left">
          Get ready for an electrifying adventure! In this game, wild Pokémon
          will appear, and your mission is to quickly click on the type that has
          the advantage over the wild Pokémon. Test your skills and knowledge to
          defeat as many Pokémon as possible before time runs out. How many can
          you conquer before the clock hits zero? Dive in and find out!
        </p>
      </section>
      <div className="play-container">
        <button
          className="play-btn font-custom text-2xl transition-transform duration-300 hover:translate-y-[-5px] transition-transform duration-300 hover:translate-y-[-5px] hover:rainbow mt-2"
          onClick={() => navigate("/game")}
        >
          Click Here To Play!
        </button>
      </div>
    </div>
  );
}

export default HomePage;
