import React from 'react';
import "./MenuButtons.scss"

function MenuButtons(props) {
    const pokemonTypes = ["Normal", "Fire", "Flying", "Psychic", "Water", "Bug", "Grass", "Rock", "Electric", "Ghost",
        "Ice", "Dark", "Fighting", "Dragon", "Poison", "Steel", "Ground", "Fairy"]


    return (

        <section className='menu'>
            <div className='menu-buttons'>
                <button className='menu-buttons-normal'>{pokemonTypes[0]}</button>
                <button className='menu-buttons-fire'>{pokemonTypes[1]}</button>
                <button className='menu-buttons-flying'>{pokemonTypes[2]}</button>
                <button className='menu-buttons-psychic'>{pokemonTypes[3]}</button>
                <button className='menu-buttons-water'>{pokemonTypes[4]}</button>
                <button className='menu-buttons-bug'>{pokemonTypes[5]}</button>
                <button className='menu-buttons-grass'>{pokemonTypes[6]}</button>
                <button className='menu-buttons-rock'>{pokemonTypes[7]}</button>
                <button className='menu-buttons-electric'>{pokemonTypes[8]}</button>
                <button className='menu-buttons-ghost'>{pokemonTypes[9]}</button>
                <button className='menu-buttons-ice'>{pokemonTypes[10]}</button>
                <button className='menu-buttons-dark'>{pokemonTypes[11]}</button>
                <button className='menu-buttons-fighting'>{pokemonTypes[12]}</button>
                <button className='menu-buttons-dragon'>{pokemonTypes[13]}</button>
                <button className='menu-buttons-poison'>{pokemonTypes[14]}</button>
                <button className='menu-buttons-steel'>{pokemonTypes[15]}</button>
                <button className='menu-buttons-ground'>{pokemonTypes[16]}</button>
                <button className='menu-buttons-fairy'>{pokemonTypes[17]}</button>
            </div>


        </section>
    );
}

export default MenuButtons;