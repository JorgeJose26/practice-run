import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

function Profile(props) {
  const [error, setError] = useState("");
  const [fainted, setFainted] = useState();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  return <div></div>;
}

export default Profile;
