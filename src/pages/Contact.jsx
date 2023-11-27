import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const Contact = () => {
  return (
    <Container>
      <h1>Contacto</h1>
      <p>¡Envíame un mensaje o hazme una preguta! Puedes contactarme de las siguientes maneras:</p>

      <Row>
        <Col>
          <div>
            <h2>Información de Contacto</h2>
            <ul>
              <li>Correo Electrónico: <a href="mailto:tu@email.com">tu@email.com</a></li>
              <li>Número de Teléfono: +123 456 7890</li>
            </ul>
          </div>
        </Col>

        <Col>
          <div>
            <h2>Redes Sociales</h2>
            <ul>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/tuusuario/" target="_blank" rel="noopener noreferrer">TuUsuario</a></li>
              <li>Twitter: <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">@TuUsuario</a></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    )
}
