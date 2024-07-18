import React from "react";

import "./MenuButtons.scss";
import { useAuth } from "../../contexts/AuthContexts";

function MenuButtons({ count, handleTypeMatchUps, formatTime, hourRemaining }) {
  const { timeRemaining } = useAuth();
  const { formatRoundTime } = useAuth();
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
        <p>Time Remaining: {formatRoundTime(timeRemaining)}</p>
        <p>Time Remaining: {formatTime(hourRemaining)}</p>
      </div>

      <section className="m-8">
        <div className="grid grid-cols-9 content-center justify-items-center gap-y-2">
          {pokemonTypes.map((type, index) => (
            <button
              key={index}
              onClick={(e) => {
                handleTypeMatchUps(e);
              }}
              className={`menu-buttons-${type.toLowerCase()} rounded-lg p-3 w-24`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default MenuButtons;
