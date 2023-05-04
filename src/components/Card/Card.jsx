import React, { useState, useEffect } from 'react';
import "./Card.scss";
import axios from 'axios';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardOverlay,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem,
    MDBCol,
    MDBRow,
    MDBContainer
} from 'mdb-react-ui-kit';




function Card(props) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getRandomPokemon = async () => {
            const randomNumber = Math.floor(Math.random() * 898) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            setPokemon(response.data);
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