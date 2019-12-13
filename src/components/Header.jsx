import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';
import {
    Col,
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Row
} from 'reactstrap';

const Header = ({ collapsed, toggleNavbar, socialLinks }) => {
    return (
        <header>
            <Navbar color="dark" dark>
                <Container>
                    <Collapse isOpen={!collapsed} navbar>
                        <Row>
                            <Col sm="8" md="7" className="py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">
                                    OVER 2 MILLION SOLD  SINCE 1956.
    Founded in 1956. We’ve come a long way.From our humble beginnings as one of the nation’s first minority-owned franchises to being recognized as one leading companies. We are connected to you.Join us in our drive.
    “We strive to Treat customers with complete honesty and respect. Offer outstanding value without complexity. Simplify antique car buying and make it fun, fast and easy. Inspire our employees to learn and grow. Lead by example as a local, civic-minded company.
                                </p>
                            </Col>
                            <Col sm="4" md={{ offset: 1 }} className="py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    {socialLinks.map((link, key) => {
                                        return (
                                            <li key={key}>
                                                <a
                                                    href={link.url}
                                                    className="text-white"
                                                >
                                                    {link.text}
                                                </a>
                                            </li>

                                        );


                                    })}
                                    <Link to="/contactForm">
                                        <li className="text-white">  Conctact Form
                                        </li>
                                    </Link>

                                </ul>
                            </Col>
                        </Row>
                    </Collapse>
                    <NavbarBrand
                        href="/"
                        className="d-flex align-items-center mr-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                        >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                        <strong>Album</strong>
                        <ul>



                        </ul>




                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                </Container>
            </Navbar>
        </header>
    );
};



/*<Link to="/album">
                                <li>                <a name="" id="" class="btn btn-primary" href="#" role="button">album</a>
                                </li>
                            </Link>*/
export default Header;
