import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ project }) => {
  const { id, image, title, description, githubLink } = project;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Ver en GitHub</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;