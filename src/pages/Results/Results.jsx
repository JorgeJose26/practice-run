import React from "react";
import { useAuth } from "../../contexts/AuthContexts";

function Results() {
  const { newPokemon } = useAuth();
  const { highestStreak } = useAuth();
  const { won } = useAuth();

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const typeColorMap = {
    normal: "bg-gray-300",
    fire: "bg-red-600",
    flying: "bg-[#A98FF3]",
    psychic: "bg-[#F95587]",
    water: "bg-[#6390F0]",
    bug: "bg-[#A6B91A]",
    grass: "bg-[#7AC74C]",
    rock: "bg-[#B6A136]",
    electric: "bg-[#F7D02C]",
    ghost: "bg-[#735797]",
    ice: "bg-[#96D9D6]",
    dark: "bg-[#705746]",
    failighting: "bg-[#C22E28]",
    dragon: "bg-[#6f35fc]",
    poison: "bg-[#a33ea1]",
    steel: "bg-[#B7B7CE]",
    ground: "bg-[#E2BF65]",
    fairy: "bg-[#D685AD]",
  };
  // Add more types and corresponding Tailwind classes as needed

  const getTypeColorClass = (types) => {
    if (!types || types.length === 0) return "bg-gray-200"; // Default color if no type is found
    return typeColorMap[types[0]] || "bg-gray-200"; // Use the first type for simplicity
  };

  console.log(highestStreak);
  return (
    <section>
      <div className="mb-5">
        <p>Results</p>
        <p>Highest Win Streak: {won}</p>
        <p>Pokemon Defeated</p>
      </div>
      <div className="auto-cols-auto auto-rows-auto">
        {newPokemon.map((p, index) => (
          <div
            key={index}
            className={`flex flex-col items-center border rounded-lg justify-center gap-4 ${getTypeColorClass(
              p.type
            )}`}
          >
            <h2 className="text-xl font-bold">{capitalizeWords(p.name)}</h2>
            <p className="mb-2">{capitalizeWords(p.type?.join(", "))}</p>
            <img src={p.image} alt={p.name} className="w-48 h-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;
