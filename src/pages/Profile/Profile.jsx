import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate, Navigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Profile(props) {
  const { ref: myRef, inView: myElementIsVisable } = useInView();

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  let pokemonTypeOne =
    pokemon.types.length > 0 ? pokemon.types[0].type.name : null;
  let pokemonTypeTwo =
    pokemon.types.length > 1 ? pokemon.types[1].type.name : null;
  const [error, setError] = useState("");
  const [fainted, setFainted] = useState();
  const { currentUser, logout } = useAuth();
  const { pokemon } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <div className="card-title">
        <h2 className="card-title-name">{capitalizeWords(pokemon.name)}</h2>
      </div>
      <div className="card-container">
        <img
          className="card-container-img"
          src={pokemon.sprites.other?.home?.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="card-footer">
        <h2 className="card-footer-type1">{capitalizeWords(pokemonTypeOne)}</h2>
        {pokemonTypeTwo && (
          <h2 className="card-footer-type2">
            {capitalizeWords(pokemonTypeTwo)}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Profile;
