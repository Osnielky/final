import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../data/users';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import '../../src/App.css';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';


class Log extends Component {

    constructor(props) {
        super(props);
        this.state = {
            album: user,
            name: '-',
            email1: '',
            password1: '',
            bool: false
        };
    };


    myChangeHandleremail = (event) => {
        this.setState({ email1: event.target.value });
    }

    myChangeHandlerpass = (event) => {
        this.setState({ password1: event.target.value });
    }

    compare = (e) => {

        e.preventDefault();


        this.state.album.map((item, key) => {
            if ((item.email === this.state.email1) && (item.password === this.state.password1)) {
                this.setState({ bool: true, name: item.name });

            }

            this.setState({ bool: true });
        });

        ToastsStore.success('Welcome'+' '+ this.state.name)

    }



    render() {

        return (

            <Container className="App">

                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input

                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder={this.state.album[1].email}
                                onChange={this.myChangeHandleremail}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">

                                Password</Label>
                            <Input

                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                onChange={this.myChangeHandlerpass}
                            />
                        </FormGroup>
                    </Col>
                    <Button type="submit" onClick={this.compare}>
                        <Link to="/album">
                                     Enter
                                
                        </Link>


                    </Button>
                    <Button className="btn" href="" >
                        <Link to="/signup">
                            <li>             Create User
                                </li>
                        </Link>

                    </Button>
                    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} />
                </Form>
            </Container>
        );
    }
}

export default Log;