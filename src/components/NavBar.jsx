import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import jumbotronImg from '../assets/img/jumbotronImg';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" variant="dark">
        <img
          src={jumbotronImg.img4}
          height={80} />
        <Container>
          <Navbar.Brand as={Link} to='/'>OMT FullSack Development</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/projects'>Portafolio</Nav.Link>
            <Nav.Link as={Link} to='/about'>Acerca de mí</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}