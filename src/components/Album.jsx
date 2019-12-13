import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    ButtonGroup,
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
    Container,
    Row
} from 'reactstrap';

const Album = ({ album }) => {
    return (
        <div className="album py-5 bg-light">
            <Container>
                <Row>
                    {album.map((item, key) => {
                        return (
                            <Col md="4" key={key}>
                                {console.log(key)}
                                
                                <Card className="mb-4 box-shadow">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item.src}
                                        alt={item.altText}
                                    />
                                    <CardBody>
                                        <h3>{item.make}</h3>
                                        <h4>{item.model}</h4>
                                        <CardText>{item.description}</CardText>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ButtonGroup>
                                                <Button
                                                    outline
                                                    color="secondary"
                                                    size="sm"

                                                >

<Link to={{ pathname: '/card', state: { id: item.id} }}>View</Link>


                                                </Button>
                                                <Button
                                                    outline
                                                    color="secondary"
                                                    size="sm"
                                                >
                                                    Add to cart
                                                </Button>
                                            </ButtonGroup>
                                            <small className="text-muted">
                                                {item.Year}
                                            </small>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Album;
