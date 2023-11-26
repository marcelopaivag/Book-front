import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import jumbotronImg from '../assets/img/jumbotronImg';
export const AboutMe = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center">Acerca de Mí</h1>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Row className="g-0">
                            <Col md={4} className="order-md-2">
                                <Card.Img src={jumbotronImg.img5} alt="Mi Imagen" />
                            </Col>
                            <Col md={8} className="order-md-1">
                                <Card.Body>
                                    <Card.Title>¡Hola! Soy Marcelo</Card.Title>
                                    <Card.Text>
                                        Soy un apasionado desarrollador fullstack con experiencia en la creación de soluciones web innovadoras. Mi enfoque se centra en proporcionar experiencias digitales de alta calidad, desde el diseño elegante hasta la funcionalidad robusta del back-end.
                                    </Card.Text>
                                    <Card.Text>
                                        Con una sólida formación en informática y años de experiencia en el campo, he trabajado en una variedad de proyectos desafiantes que me han permitido perfeccionar mis habilidades en tecnologías como React, Node.js, y Mongo DB.
                                    </Card.Text>
                                    <Card.Text>
                                        Estoy comprometido a ofrecer soluciones que no solo cumplan con los requisitos, sino que también superen las expectativas. ¡Espero trabajar contigo para llevar tus ideas al siguiente nivel!
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>)
}
