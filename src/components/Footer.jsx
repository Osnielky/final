import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
const Footer = props => {
    return (
        <footer className="text-muted">
            <Container>
                <Link to="/album">
                    <p className="float-right">
                        <a href="#">Back to Home Page</a>
                    </p>
                </Link>

                <p>

                    Drive a great car! Make your dream come true!
                </p>

            </Container>
        </footer>
    );
};

export default Footer;
