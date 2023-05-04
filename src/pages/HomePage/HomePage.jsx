import React from 'react';
import "./HomePage.scss"
import { useNavigate } from "react-router-dom";



function HomePage(props) {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='home-container'>
                <h2>Welcome to pokemon type tester!</h2>
                <p>This game will test your pokemon type knowledge</p>
                <p>The game is simple. A random pokemon will appear before you and the challange is to choose one super effctive
                    type against the pokemon.
                </p>
                <p>Ready to be a pokemon master?</p>
                <button onClick={() => navigate(`/game`)} >Click Here!</button>

            </div>




        </div>
    );
}

export default HomePage;