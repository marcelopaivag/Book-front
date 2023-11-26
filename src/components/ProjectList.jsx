import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../assets/project';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectList = () => {
  return (
    <Container>
    <h1>Mis Proyectos</h1>
    <Row xs={1} md={2} lg={3} xl={4}>
      {projects.map((project, index) => (
        <Col key={index} className="mb-4">
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  </Container>  );
};

export default ProjectList;