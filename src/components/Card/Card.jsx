import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Card.scss";
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
import pokeballBackground from "../../assets/images/bg-pokeball.svg";

function Card({ pokemon }) {
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

  console.log(pokemon.types[0].type.name);

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
    fighting: fightingIcon, // Corrected the typo here
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
  const cardBackgroundStyle = {
    backgroundImage: `url(${pokeballBackground}), radial-gradient(80% 80% at 50% bottom, ${
      typeGradientColors[pokemonTypeOne] || "rgb(102, 204, 51)"
    }, rgba(6, 14, 32, 0.8))`,
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
    fighting: "bg-[#C22E28]",
    dragon: "bg-[#6f35fc]",
    poison: "bg-[#a33ea1]",
    steel: "bg-[#B7B7CE]",
    ground: "bg-[#E2BF65]",
    fairy: "bg-[#D685AD]",
  };

  const getTypeBgColorClass = (types) => {
    if (!types || types.length === 0) return "bg-gray-200"; // Default color if no type is found
    return typeColorMap[types[0]] || "bg-gray-200"; // Use the first type for simplicity
  };

  return (
    <div
      ref={myRef}
      className={`card ${
        myElementIsVisable ? `animate` : ""
      } flex flex-col justify-center flex-wrap content-center`}
      style={cardBackgroundStyle}
    >
      <div
      // className={`card-container border rounded-lg mb-4  ${getTypeBgColorClass(
      //   [pokemon.types[0].type.name]
      // )}`}
      >
        <div className="flex items-center justify-center w-64 h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={pokemon.sprites.other?.home?.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="card-title ">
          <h2 className="card-title-name text-2xl">
            {capitalizeWords(pokemon.name)}
          </h2>
        </div>

        <div className="card-footer-container pt-6 pb-6 flex flex-row justify-around ">
          <div
            className={`type-one-container flex flex-row items-center border rounded-md gap-[6px] text-[1rem] font-bold text-white w-[120px] align-middle p-[5px] justify-evenly ${getTypeBgColorClass(
              [pokemonTypeOne]
            )}`}
          >
            <img
              className="w-[18px]"
              src={typeIcons[pokemonTypeOne]}
              alt={`${pokemonTypeOne} Type`}
            />
            <h2 className={`card-footer-type1 text-2xl `}>
              {capitalizeWords(pokemonTypeOne)}
            </h2>
          </div>

          {pokemonTypeTwo && (
            <div
              className={`type-two-container flex flex-row items-center border rounded-md gap-[6px] text-[1rem] font-bold text-white w-[120px] align-middle p-[5px]  justify-evenly ${getTypeBgColorClass(
                [pokemonTypeTwo]
              )} `}
            >
              <img
                className="w-[18px]"
                src={typeIcons[pokemonTypeTwo]}
                alt={`${pokemonTypeTwo} Type`}
              />
              <h2 className={`card-footer-type2 text-2xl`}>
                {capitalizeWords(pokemonTypeTwo)}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
