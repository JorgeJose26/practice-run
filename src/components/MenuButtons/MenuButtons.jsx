import React from "react";
import "./MenuButtons.scss";
import { useAuth } from "../../contexts/AuthContexts";

function MenuButtons({
  count,
  handleTypeMatchUps,
  formatTime,
  hourRemaining,
  highestStreak,
}) {
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
      <div className="info-container grid grid-cols-3 gap-2 text-center">
        <div className="info-card bg-red-500 text-white p-2 rounded-md shadow-sm flex items-center justify-center">
          <span className="text-xl">🔥</span>
          <span className="text-lg font-extrabold ml-2">{highestStreak}</span>
        </div>
        <div
          className={`info-card ${
            timeRemaining <= 5 ? "time-expiring" : "bg-blue-500"
          } text-white p-2 rounded-md shadow-sm flex items-center justify-center`}
        >
          <span className="text-xl">⏳</span>
          <span className="text-lg font-extrabold ml-2">
            {formatRoundTime(timeRemaining)}
          </span>
        </div>
        <div className="info-card bg-green-500 text-white p-2 rounded-md shadow-sm flex items-center justify-center">
          <span className="text-xl">⏱️</span>
          <span className="text-lg font-extrabold ml-2">
            {formatTime(hourRemaining)}
          </span>
        </div>
      </div>

      <section className="m-[1rem]">
        <div className="grid grid-cols-3 justify-items-center gap-3">
          {pokemonTypes.map((type, index) => (
            <button
              key={index}
              onClick={(e) => {
                handleTypeMatchUps(e);
              }}
              className={`menu-buttons-${type.toLowerCase()} flex flex-row items-center border rounded-md gap-[6px] text-[1rem] font-bold text-white w-[80px] align-middle pt-[4px] pl-[4px] pr-[4px] pb-[4px]  justify-center
              `}
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
