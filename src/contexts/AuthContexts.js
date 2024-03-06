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

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }
  // Spits out a random pokemon from the pokemon API.

  useEffect(() => {
    const getRandomPokemon = async () => {
      const randomNumber = Math.floor(Math.random() * 898) + 1;

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
      );
      setPokemon(response.data);
    };

    getRandomPokemon();
  }, [trys]);

  function handleNewPokemon() {
    setNewPokemon((prevNewPokemon) => [
      ...prevNewPokemon,
      {
        name: pokemon.name,
        type: pokemon.types.map((type) => type?.type.name),
        image: pokemon.sprites.front_default,
      },
    ]);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTrys((prevTrys) => prevTrys + 1);
    }, 10000); // 10 seconds

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [trys]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) =>
        prevTimeRemaining === 0 ? 10 : prevTimeRemaining - 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
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
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
