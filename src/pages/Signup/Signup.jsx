import React from "react";
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { Navigate, Link } from "react-router-dom";

function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to Create an account");
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
            <div className="confirmPassword">
              <span>Confirm Password</span>
              <input type="password" ref={passwordConfirmRef} required />
            </div>
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <span className="white">Already have an account? </span>{" "}
        <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;
