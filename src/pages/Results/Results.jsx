import React from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";
import pokeballBackground from "../../assets/images/bg-pokeball.svg";
import "./Results.scss";
import normalIcon from "../../assets/images/normal.svg";
import fireIcon from "../../assets/images/fire.svg";
import flyingIcon from "../../assets/images/flying.svg";
import psychicIcon from "../../assets/images/psychic.svg";
import waterIcon from "../../assets/images/water.svg";
import bugIcon from "../../assets/images/bug.svg";
import grassIcon from "../../assets/images/grass.svg";
import rockIcon from "../../assets/images/rock.svg";
import electricIcon from "../../assets/images/electric.svg";
import ghostIcon from "../../assets/images/ghost.svg";
import iceIcon from "../../assets/images/ice.svg";
import darkIcon from "../../assets/images/dark.svg";
import fightingIcon from "../../assets/images/fighting.svg";
import dragonIcon from "../../assets/images/dragon.svg";
import poisonIcon from "../../assets/images/poison.svg";
import steelIcon from "../../assets/images/steel.svg";
import groundIcon from "../../assets/images/ground.svg";
import fairyIcon from "../../assets/images/fairy.svg";

function Results() {
  const { newPokemon, highestStreak, won, resetGame } = useAuth(); // Get resetGame from context
  const navigate = useNavigate();

  const capitalizeWords = (str) => {
    if (typeof str !== "string") {
      console.error("capitalizeWords expected a string but received:", str);
      return "";
    }
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const typeIcons = {
    normal: normalIcon,
    fire: fireIcon,
    flying: flyingIcon,
    psychic: psychicIcon,
    water: waterIcon,
    bug: bugIcon,
    grass: grassIcon,
    rock: rockIcon,
    electric: electricIcon,
    ghost: ghostIcon,
    ice: iceIcon,
    dark: darkIcon,
    fighting: fightingIcon,
    dragon: dragonIcon,
    poison: poisonIcon,
    steel: steelIcon,
    ground: groundIcon,
    fairy: fairyIcon,
  };

  const typeGradientColors = {
    fire: "rgb(255, 102, 51)",
    water: "rgb(51, 153, 255)",
    normal: "rgb(255, 204, 153)",
    poison: "rgb(170, 102, 204)",
    electric: "rgb(255, 204, 51)",
    ground: "rgb(255, 204, 102)",
    fairy: "rgb(255, 153, 204)",
    bug: "rgb(153, 204, 51)",
    fighting: "rgb(255, 51, 51)",
    psychic: "rgb(255, 102, 153)",
    ghost: "rgb(102, 102, 204)",
    ice: "rgb(153, 255, 255)",
    dragon: "rgb(112, 56, 248)",
    dark: "rgb(51, 51, 51)",
    steel: "rgb(204, 204, 204)",
    flying: "rgb(102, 153, 255)",
  };

  if (
    !newPokemon ||
    !newPokemon.length ||
    !newPokemon[0].type ||
    !newPokemon[0].type.length
  ) {
    return (
      <section className="flex flex-col">
        <div className="mb-5">
          <p>No Pokémon defeated</p>
          <button onClick={() => navigate(`/game`)}>Return</button>
        </div>
      </section>
    );
  }

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
    fighting: "bg-[#C22E28]",
    dragon: "bg-[#6f35fc]",
    poison: "bg-[#a33ea1]",
    steel: "bg-[#B7B7CE]",
    ground: "bg-[#E2BF65]",
    fairy: "bg-[#D685AD]",
  };

  const getTypeBgColorClass = (types) => {
    if (!types || !types.length) return "bg-gray-200";
    return typeColorMap[types[0]] || "bg-gray-200";
  };

  const handlePlayAgain = () => {
    resetGame(); // Call resetGame to clear state
    navigate("/game"); // Navigate to the game screen
  };

  return (
    <section className="flex flex-col p-8">
      <div className="mb-5">
        <p className="text-white">Results</p>
        <p className="text-white">Highest Win Streak: {highestStreak}</p>
        <p className="text-white">Pokemon Defeated: {won}</p>
        {/* New Play Again button */}
        <button className="text-white" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>

      {newPokemon.map((p, index) => {
        const cardBackgroundStyle = {
          backgroundImage: `url(${pokeballBackground}), radial-gradient(80% 80% at 50% bottom, ${
            typeGradientColors[p.type[0]] || "rgb(102, 204, 51)"
          }, rgba(6, 14, 32, 0.8))`,
        };

        return (
          <div
            key={index}
            style={cardBackgroundStyle}
            className={`results-card flex flex-col justify-center flex-wrap content-center mt-4 mb-4`}
          >
            <div>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={p.image}
                  alt={p.name}
                />
              </div>
              <div className="results-card-title">
                <h2 className="results-card-title-name text-[2rem]">
                  {capitalizeWords(p.name)}
                </h2>
              </div>

              <div className="card-footer-container pt-6 pb-6 flex flex-row justify-around">
                <div
                  className={`type-one-container flex flex-row items-center border rounded-md border-transparent gap-[6px] text-[1.2rem] font-bold text-white w-[120px] align-middle pt-[4px] pl-[10px] pr-[10px] pb-[4px] justify-center ${getTypeBgColorClass(
                    p.type
                  )}`}
                >
                  <img
                    className="w-[18px]"
                    src={typeIcons[p.type[0]]}
                    alt={`${p.type[0]} Type`}
                  />
                  <h2 className={`card-footer-type1`}>
                    {capitalizeWords(p.type[0])}
                  </h2>
                </div>

                {p.type[1] && (
                  <div
                    className={`type-two-container flex flex-row items-center border rounded-md border-transparent gap-[6px] text-[1.2rem] font-bold text-white w-[120px] align-middle pt-[4px] pl-[10px] pr-[10px] pb-[4px] justify-center ${getTypeBgColorClass(
                      [p.type[1]]
                    )}`}
                  >
                    <img
                      className="w-[18px]"
                      src={typeIcons[p.type[1]]}
                      alt={`${p.type[1]} Type`}
                    />
                    <h2 className={`card-footer-type2`}>
                      {capitalizeWords(p.type[1])}
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Results;
