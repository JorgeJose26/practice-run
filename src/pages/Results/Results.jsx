import React from "react";
import { useAuth } from "../../contexts/AuthContexts";

function Results() {
  const { newPokemon } = useAuth();
  const { highestStreak } = useAuth();
  const { won } = useAuth();

  console.log(highestStreak);
  return (
    <section>
      <div>
        <p>Results</p>
        <p>Highest Win Streak: {won}</p>
        <p>Pokemon Defeated</p>
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        {newPokemon.map((p, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="mb-2">{p.type?.join(", ")}</p>
            <img src={p.image} alt={p.name} className="w-48 h-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;
