import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import projects from '../assets/projectsJs';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  console.log(projects)
  return (
    <>
      <Row><h2 className='text-center p-4'>Mis Proyectos</h2></Row>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className='ml-5 p-4' style={{ width: '40rem' }}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Link to={`/projects/${project.id}`}>
                  <Button variant="dark">Ver proyecto</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProjectList;
