import React from "react";
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { Navigate, Link } from "react-router-dom";

function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          {currentUser && <Navigate to="/game" replace={true} />}
          <form onSubmit={handleSubmit} className="card-body-form">
            <div className="email">
              <span>Email</span>
              <input type="email" ref={emailRef} required />
            </div>
            <div className="password">
              <span>Password</span>
              <input type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <span className="white">Need an account? </span>
        <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}

export default Login;
