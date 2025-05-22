import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../lib/init-firebase";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [trys, setTrys] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [highestStreak, setHighestStreak] = useState(0);
  const [newPokemon, setNewPokemon] = useState([]);
  const [count, setCount] = useState(0);
  const [won, setWon] = useState(0);
  const [holdHightScore, setHoldHightScore] = useState(0);

  // Firebase Auth functions
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  // Fetch a new random Pokémon when the timer reaches zero or a user wins
  const getRandomPokemon = async () => {
    const randomNumber = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );
    setPokemon(response.data);
  };

  function resetGame() {
    setTrys(0);
    setCount(0);
    setTimeRemaining(10);
    setHighestStreak(0);
    setWon(0);
  }

  function handleNewPokemon() {
    setNewPokemon((prevNewPokemon) => {
      // Check if the current Pokémon is already in the array
      const isAlreadyDefeated = prevNewPokemon.some(
        (p) => p.name === pokemon.name
      );

      if (!isAlreadyDefeated) {
        return [
          ...prevNewPokemon,
          {
            name: pokemon.name,
            type: pokemon.types.map((type) => type?.type.name),
            image: pokemon.sprites.other?.home?.front_default,
          },
        ];
      }
      // If already defeated, return the array unchanged
      return prevNewPokemon;
    });

    // Reset the timer
    setTimeRemaining(10);
  }

  // Consolidated timer and Pokémon fetching logic
  useEffect(() => {
    // Fetch a new Pokémon on mount or when the `trys` changes
    getRandomPokemon();

    const timerId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining <= 1) {
          // Time's up, increment trys, fetch new Pokémon
          setTrys((prevTrys) => prevTrys + 1);
          setHighestStreak(0);
          return 10; // Reset the timer
        }
        return prevTimeRemaining - 1; // Countdown
      });
    }, 1000);

    return () => clearInterval(timerId); // Clear interval on unmount
  }, [trys]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const formatRoundTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    trys,
    pokemon,
    setTrys,
    timeRemaining,
    setTimeRemaining,
    formatRoundTime,
    highestStreak,
    setHighestStreak,
    newPokemon,
    count,
    setCount,
    won,
    setWon,
    handleNewPokemon,
    resetGame,
    holdHightScore,
    setHoldHightScore,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
