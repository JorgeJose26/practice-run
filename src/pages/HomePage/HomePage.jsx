import React from 'react';
import "./HomePage.scss"
import { useNavigate } from "react-router-dom";




function HomePage(props) {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='home-container'>
                <h1>Welcome to Pokemon type tester!</h1>
                <h2>This game will test your Pokemon type knowledge!</h2>
                <p>Ready to be a Pokemon master?</p>
                <button className='start-btn' onClick={() => navigate(`/game`)} >Get Started</button>

            </div>




        </div>
    );
}

export default HomePage;