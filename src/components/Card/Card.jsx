import React, { useState, useEffect } from 'react';
import "./Card.scss";
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';





function Card(props) {
    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        const getRandomPokemon = async () => {
            const randomNumber = Math.floor(Math.random() * 898) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            setPokemon(response.data);
            console.log(response.data);

        };

        getRandomPokemon();
    }, []);

    if (!pokemon) return <div>Loading...</div>;

    const capitalizeWords = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const typeMatchups = {
        normal: {
            weaknesses: ['fighting'],
            strengths: [],
        },
        fire: {
            weaknesses: ['water', 'ground', 'rock'],
            strengths: ['grass', 'ice', 'bug', 'steel'],
        },
        water: {
            weaknesses: ['electric', 'grass'],
            strengths: ['fire', 'ground', 'rock'],
        },
        electric: {
            weaknesses: ['ground'],
            strengths: ['water', 'flying'],
        },
        grass: {
            weaknesses: ['fire', 'ice', 'poison', 'flying', 'bug'],
            strengths: ['water', 'ground', 'rock'],
        },
        ice: {
            weaknesses: ['fire', 'fighting', 'rock', 'steel'],
            strengths: ['grass', 'ground', 'flying', 'dragon'],
        },
        fighting: {
            weaknesses: ['flying', 'psychic', 'fairy'],
            strengths: ['normal', 'ice', 'rock', 'dark', 'steel'],
        },
        poison: {
            weaknesses: ['ground', 'psychic'],
            strengths: ['grass', 'fairy'],
        },
        ground: {
            weaknesses: ['water', 'grass', 'ice'],
            strengths: ['fire', 'electric', 'poison', 'rock', 'steel'],
        },
        flying: {
            weaknesses: ['electric', 'ice', 'rock'],
            strengths: ['grass', 'fighting', 'bug'],
        },
        psychic: {
            weaknesses: ['bug', 'ghost', 'dark'],
            strengths: ['fighting', 'poison'],
        },
        bug: {
            weaknesses: ['fire', 'flying', 'rock'],
            strengths: ['grass', 'psychic', 'dark'],
        },
        rock: {
            weaknesses: ['water', 'grass', 'fighting', 'ground', 'steel'],
            strengths: ['fire', 'ice', 'flying', 'bug'],
        },
        ghost: {
            weaknesses: ['ghost', 'dark'],
            strengths: ['psychic', 'ghost'],
        },
        dragon: {
            weaknesses: ['ice', 'dragon', 'fairy'],
            strengths: ['dragon'],
        },
        dark: {
            weaknesses: ['fighting', 'bug', 'fairy'],
            strengths: ['psychic', 'ghost'],
        },
        steel: {
            weaknesses: ['fire', 'fighting', 'ground'],
            strengths: ['ice', 'rock', 'fairy'],
        },
        fairy: {
            weaknesses: ['poison', 'steel'],
            strengths: ['fighting', 'dragon', 'dark'],
        },
    };





    const handleTypeMatchUps = () => {
        let correctAwnser = [];
        let incorrectAwnser = "Wrong";
        if (pokemon.types[0].type.name === 'Normal') {
            typeMatchups.normal.weaknesses[0] = correctAwnser[0];
            typeMatchups.normal.weaknesses[1] = correctAwnser[1];

        }
        else {
            incorrectAwnser;
        }

    }







    return (

        <div className='card'>
            <div className='card-title'>
                <h2 className='card-title-name'>{capitalizeWords(pokemon.name)}</h2>
            </div>
            <div className='card-container'>
                <img className='card-img' src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />

            </div>
            <div className='card-footer'>
                <h2>Type: {capitalizeWords(pokemon.types[0].type.name)}</h2>

            </div>


        </div>
    );
}

export default Card;