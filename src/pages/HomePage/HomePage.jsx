import React from "react";
import "./HomePage.scss";
import { useEffect, useState } from "react";
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
      <div className="title-container flex flex-col justify-center gap-6 content-center align-center items-center m-2">
        <h1 className="title">Super Type Tester</h1>
        <div className="btn-container">
          <button className="signup-btn" onClick={() => navigate(`/signup`)}>
            Login
          </button>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Signup
          </button>
          <button className="play-btn" onClick={() => navigate("/game")}>
            Play
          </button>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
