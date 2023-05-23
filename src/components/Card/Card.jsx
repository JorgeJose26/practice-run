import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "./Card.scss";






function Card({ pokemon }) {
    const { ref: myRef, inView: myElementIsVisable } = useInView();

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