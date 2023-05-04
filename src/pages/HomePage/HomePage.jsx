import React from 'react';
import "./HomePage.scss"
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import MenuButtons from '../../components/MenuButtons/MenuButtons';
import { MDBContainer } from 'mdb-react-ui-kit';


function HomePage(props) {
    return (
        <div className='Home'>
            <NavBar />
            <MDBContainer className='w-25 p-3'>
                <Card />
            </MDBContainer>
            <MenuButtons />


        </div>
    );
}

export default HomePage;