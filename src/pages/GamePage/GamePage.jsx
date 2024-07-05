import Card from "../../components/Card/Card";
import MenuButtons from "../../components/MenuButtons/MenuButtons";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const { pokemon } = useAuth();
  const { count, setCount } = useAuth();
  const { trys, setTrys } = useAuth();
  const { setTimeRemaining } = useAuth();
  const fiveMin = 300000;
  const [hourRemaining, setHourRemaining] = useState(fiveMin);
  const { highestStreak, setHighestStreak } = useAuth();
  const navigate = useNavigate();
  const { won, setWon } = useAuth();
  const [lost, setLost] = useState(0);
  const { handleNewPokemon } = useAuth();

  useEffect(() => {
    const timerId = setInterval(() => {
      setHourRemaining((prevTime) => {
        const newTime = prevTime - 1000;

        if (newTime <= 0) {
          clearInterval(timerId);
          navigate("/results");
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (!pokemon) return <div>Loading...</div>;

  const typeMatchups = {
    normal: {
      weaknesses: ["fighting"],
      strengths: [],
      reistances: [],
    },
    fire: {
      weaknesses: ["water", "ground", "rock"],
      strengths: ["grass", "ice", "bug", "steel"],
      reistances: ["fire", "grass,", "ice", "bug", "steel", "fairy"],
    },
    water: {
      weaknesses: ["electric", "grass"],
      strengths: ["fire", "ground", "rock"],
      reistances: ["fire", "water,", "ice", "steel"],
    },
    electric: {
      weaknesses: ["ground"],
      strengths: ["water", "flying"],
      reistances: ["electric", "flying,", "steel"],
    },
    grass: {
      weaknesses: ["fire", "ice", "poison", "flying", "bug"],
      strengths: ["water", "ground", "rock"],
      reistances: ["water", "electric,", "grass", "ground"],
    },
    ice: {
      weaknesses: ["fire", "fighting", "rock", "steel"],
      strengths: ["grass", "ground", "flying", "dragon"],
      reistances: ["ice"],
    },
    fighting: {
      weaknesses: ["flying", "psychic", "fairy"],
      strengths: ["normal", "ice", "rock", "dark", "steel"],
      reistances: ["bug", "rock", "dark"],
    },
    poison: {
      weaknesses: ["ground", "psychic"],
      strengths: ["grass", "fairy"],
      reistances: ["grass", "fighting,", "posion", "bug", "fairy"],
    },
    ground: {
      weaknesses: ["water", "grass", "ice"],
      strengths: ["fire", "electric", "poison", "rock", "steel"],
      reistances: ["posion", "rock"],
    },
    flying: {
      weaknesses: ["electric", "ice", "rock"],
      strengths: ["grass", "fighting", "bug"],
      reistances: ["grass", "fighting", "bug"],
    },
    psychic: {
      weaknesses: ["bug", "ghost", "dark"],
      strengths: ["fighting", "poison"],
      reistances: ["psychic"],
    },
    bug: {
      weaknesses: ["fire", "flying", "rock"],
      strengths: ["grass", "psychic", "dark"],
      reistances: ["grass", "fighting", "ground"],
    },
    rock: {
      weaknesses: ["water", "grass", "fighting", "ground", "steel"],
      strengths: ["fire", "ice", "flying", "bug"],
      reistances: ["normal", "fire", "posion", "flying"],
    },
    ghost: {
      weaknesses: ["ghost", "dark"],
      strengths: ["psychic", "ghost"],
      reistances: ["posion", "bug"],
    },
    dragon: {
      weaknesses: ["ice", "dragon", "fairy"],
      strengths: ["dragon"],
      reistances: ["fire", "water", "electric", "bug"],
    },
    dark: {
      weaknesses: ["fighting", "bug", "fairy"],
      strengths: ["psychic", "ghost"],
      reistances: ["ghost", "dark"],
    },
    steel: {
      weaknesses: ["fire", "fighting", "ground"],
      strengths: ["ice", "rock", "fairy"],
      reistances: [
        "normal",
        "grass,",
        "ice",
        "flying",
        "psychic",
        "bug",
        "rock",
        "dragon",
        "steel",
        "fairy",
      ],
    },
    fairy: {
      weaknesses: ["poison", "steel"],
      strengths: ["fighting", "dragon", "dark"],
      reistances: ["fighting", "bug", "dark"],
    },
  };

  const handleTypeMatchUps = (e) => {
    let currentPokemontype = pokemon.types[0]?.type.name;
    let currentPokemonSndType = pokemon.types[1]?.type.name;
    let currentWeaknesses = typeMatchups[currentPokemontype]?.weaknesses;
    let currentWeaknesses2md = typeMatchups[currentPokemonSndType]?.weaknesses;
    let selectedType = e.target.innerHTML.toLowerCase();

    console.log(currentWeaknesses2md);
    console.log(currentPokemonSndType);
    console.log(currentWeaknesses);

    //Have to check if pokemon has one type or two.
    //if the pokemon has one type checm if the selected type is equal to the current weakness if so +1
    //if user has two types check for the two types weakness we will sort out the reistances later.
    if (pokemon.types.length === 1) {
      if (
        currentWeaknesses[0] === selectedType ||
        currentWeaknesses[1] === selectedType ||
        currentWeaknesses[2] === selectedType ||
        currentWeaknesses[3] === selectedType ||
        currentWeaknesses[4] === selectedType ||
        currentWeaknesses[5] === selectedType
      ) {
        setCount(count + 1);
        setTrys(trys + 1);
        setTimeRemaining(10);
        setWon(won + 1);
        handleNewPokemon();
      } else {
        console.log("wrong");
        setCount(0);
        setTrys(trys + 1);
        setTimeRemaining(10);
        setLost(lost + 1);
      }
      //You have to take resistances into account for pokemon with two types
      //for example if a pokemon is water/dragon. water is weak to electric but dragon isn't so it would be super effective.
      //if one of the types of a pokemon is weak to the selectedType we need to check if the other type has a resitance to that type.
      //only when that if is passed then we have hit a super effective hit.
    } else if (pokemon.types.length === 2) {
      const currentResistances1st =
        typeMatchups[currentPokemontype]?.reistances;
      const currentResistances2nd =
        typeMatchups[currentPokemonSndType]?.reistances;
      console.log(currentResistances1st);
      console.log(currentResistances2nd);
      if (
        currentResistances1st[0] === selectedType ||
        currentResistances1st[1] === selectedType ||
        currentResistances1st[2] === selectedType ||
        currentResistances1st[3] === selectedType ||
        currentResistances1st[4] === selectedType ||
        currentResistances1st[5] === selectedType ||
        currentResistances1st[6] === selectedType ||
        currentResistances1st[7] === selectedType ||
        currentResistances1st[8] === selectedType ||
        currentResistances1st[9] === selectedType ||
        currentResistances2nd[0] === selectedType ||
        currentResistances2nd[1] === selectedType ||
        currentResistances2nd[2] === selectedType ||
        currentResistances2nd[3] === selectedType ||
        currentResistances2nd[4] === selectedType ||
        currentResistances2nd[5] === selectedType ||
        currentResistances2nd[6] === selectedType ||
        currentResistances2nd[7] === selectedType ||
        currentResistances2nd[8] === selectedType ||
        currentResistances2nd[9] === selectedType
      ) {
        console.log("hit a resistance");
        setCount(0);
        setTrys(trys + 1);
        setTimeRemaining(10);
        setLost(lost + 1);
      } else if (
        currentWeaknesses[0] === selectedType ||
        currentWeaknesses[1] === selectedType ||
        currentWeaknesses[2] === selectedType ||
        currentWeaknesses[3] === selectedType ||
        currentWeaknesses[4] === selectedType ||
        currentWeaknesses[5] === selectedType ||
        currentWeaknesses2md[0] === selectedType ||
        currentWeaknesses2md[1] === selectedType ||
        currentWeaknesses2md[2] === selectedType ||
        currentWeaknesses2md[3] === selectedType ||
        currentWeaknesses2md[4] === selectedType ||
        currentWeaknesses2md[5] === selectedType
      ) {
        setCount(count + 1);
        setTrys(trys + 1);
        setWon(won + 1);
        setTimeRemaining(10);
        handleNewPokemon();
      } else {
        console.log("wrong");
        console.log("didnt hit a super effective move");
        setCount(0);
        setLost(lost + 1);
        setTrys(trys + 1);
        setTimeRemaining(10);
      }
    }
  };
  if (count > highestStreak) {
    setHighestStreak(count);
  }

  return (
    <div className="p-14">
      {pokemon && <Card trys={trys} key={count} pokemon={pokemon} />}
      <MenuButtons
        count={count}
        formatTime={formatTime}
        hourRemaining={hourRemaining}
        handleTypeMatchUps={handleTypeMatchUps}
      />
    </div>
  );
}

export default GamePage;
