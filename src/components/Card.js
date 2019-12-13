import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../../src/App.css';



let vares = Math.floor(Math.random() * (9));


const Card = ({ album }) => {

  return (


    <Container className="App">


      <div class="card mb-3">
        <img class="card-img-top" src={album[vares].src1}></img>
        <div class="card-body">
          <h2 class="card-title">Maker: {album[vares].make}</h2>
          <h4 class="card-title">Model: {album[vares].model}</h4>
          <h4 class="card-title">Color: {album[vares].color}</h4>
          <p class="card-text"> {album[1].description}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <h4 class="card-title">Price: ${album[vares].price}</h4>
          <Button color="primary">Buy </Button>{' '}


        </div>
      </div>


    </Container>
  );

}

export default Card;