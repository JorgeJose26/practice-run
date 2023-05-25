import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import MenuButtons from '../../components/MenuButtons/MenuButtons';
import { MDBContainer } from 'mdb-react-ui-kit';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function GamePage() {

    const [pokemon, setPokemon] = useState(null);
    const [count, setCount] = useState(0);
    const [correct, setCorrect] = useState();











    useEffect(() => {
        const getRandomPokemon = async () => {
            const randomNumber = Math.floor(Math.random() * 898) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            setPokemon(response.data);


        };

        getRandomPokemon();
    }, [correct, count]);

    if (!pokemon) return <div>Loading...</div>;



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


    const handleTypeMatchUps = (e) => {
        let currentPokemontype = pokemon.types[0].type.name;
        let currentWeaknesses = typeMatchups[currentPokemontype].weaknesses;
        let selectedType = e.target.innerHTML.toLowerCase();

        if (currentWeaknesses[0] === selectedType) {
            setCount(count + 1);

        } else if (currentWeaknesses[1] === selectedType) {
            setCount(count + 1);


        } else if (currentWeaknesses[2] === selectedType) {
            setCount(count + 1);


        } else if (currentWeaknesses[3] === selectedType) {
            setCount(count + 1);


        } else if (currentWeaknesses[4] === selectedType) {
            setCount(count + 1);


        } else if (currentWeaknesses[5] === selectedType) {
            setCount(count + 1);


        } else {
            console.log("Wrong!");



        }


    }

    const handleWinLoss = () => {
        if (count++) {
            console.log("win");
        }
    }




    return (
        <div>
            <MDBContainer className='w-25 p-3'>

                {pokemon && <Card pokemon={pokemon} />}


            </MDBContainer>
            <MenuButtons count={count} handleTypeMatchUps={handleTypeMatchUps} />
        </div>
    );
}

export default GamePage;