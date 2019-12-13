import React from 'react';
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';
import '../../src/App.css';
// import ButtonLogin from './DropDown';
//import SignUp from './SignUp';
import Example from './Test';


const Main = ({ album }) => {
    return (


        <main role="main">

            <Jumbotron className="text-center">
                <Example />
                <Container className="cont">
                    <h1 className="jumbotron-heading">Luxuria Classic Auto</h1>

                </Container>
            </Jumbotron>
            <Album album={album} />


        </main>
    );
};

export default Main;
//pendiente
// poner el login <Login /> linea 12