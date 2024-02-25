import React from "react";

import "./MenuButtons.scss";
import { useAuth } from "../../contexts/AuthContexts";

function MenuButtons({
  count,
  handleTypeMatchUps,
  formatTime,
  hourRemaining = { hourRemaining },
}) {
  const { timeRemaining } = useAuth();

  const pokemonTypes = [
    "Normal",
    "Fire",
    "Flying",
    "Psychic",
    "Water",
    "Bug",
    "Grass",
    "Rock",
    "Electric",
    "Ghost",
    "Ice",
    "Dark",
    "Fighting",
    "Dragon",
    "Poison",
    "Steel",
    "Ground",
    "Fairy",
  ];

  return (
    <>
      <div>
        <p>
          <span>Hot Streak : </span>
          {count}
        </p>
        <p>Time Remaining: {timeRemaining}</p>
        <p>Time Remaining: {formatTime(hourRemaining)}</p>
      </div>

      <section className="m-8">
        <div className="grid grid-cols-9 content-center justify-items-center gap-y-2">
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-normal rounded-lg p-3 w-24"
          >
            {pokemonTypes[0]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-fire rounded-lg p-3 w-24 "
          >
            {pokemonTypes[1]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-flying rounded-lg p-3 w-24"
          >
            {pokemonTypes[2]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-psychic rounded-lg p-3 w-24"
          >
            {pokemonTypes[3]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-water rounded-lg p-3 w-24"
          >
            {pokemonTypes[4]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-bug rounded-lg p-3 w-24"
          >
            {pokemonTypes[5]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-grass rounded-lg p-3 w-24"
          >
            {pokemonTypes[6]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-rock rounded-lg p-3 w-24"
          >
            {pokemonTypes[7]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-electric rounded-lg p-3 w-24"
          >
            {pokemonTypes[8]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-ghost rounded-lg p-3 w-24"
          >
            {pokemonTypes[9]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-ice rounded-lg p-3 w-24"
          >
            {pokemonTypes[10]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-dark rounded-lg p-3 w-24"
          >
            {pokemonTypes[11]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-fighting rounded-lg p-3 w-24"
          >
            {pokemonTypes[12]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-dragon rounded-lg p-3 w-24"
          >
            {pokemonTypes[13]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-poison rounded-lg p-3 w-24"
          >
            {pokemonTypes[14]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-steel rounded-lg p-3 w-24"
          >
            {pokemonTypes[15]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-ground rounded-lg p-3 w-24"
          >
            {pokemonTypes[16]}
          </button>
          <button
            onClick={handleTypeMatchUps}
            className="menu-buttons-fairy rounded-lg p-3 w-24"
          >
            {pokemonTypes[17]}
          </button>
        </div>
      </section>
    </>
  );
}

export default MenuButtons;
