import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";

function Results({ lost }) {
  const { newPokemon } = useAuth();
  const { highestStreak } = useAuth();
  const { won } = useAuth();

  console.log(highestStreak);
  return (
    <div>
      {newPokemon.map((p, index) => (
        <div key={index}>
          <h2>{p.name}</h2>
          <p>Type: {p.type?.join(", ")}</p>
          <img src={p.image} alt={p.name} />
          <p>{highestStreak}</p>
          <p>{won}</p>
          <p>{lost}</p>
        </div>
      ))}
    </div>
  );
}

export default Results;
