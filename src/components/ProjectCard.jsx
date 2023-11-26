import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ project }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} alt={project.title} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button variant="primary" href={project.githubLink} target="_blank">
          Ver en GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;