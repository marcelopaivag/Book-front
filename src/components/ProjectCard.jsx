import React from 'react';
import Card from 'react-bootstrap/Card';
import projects from '../assets/projectsJs';
import { useParams } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';


export const ProjectCard = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id, 10));

  if (!project) {
    return <div>No se encontró el proyecto</div>;
  }

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={project.image} style={{ width: '70%', margin: '0 auto' }} />
      <Card.Body>
        <Card.Title><h2>{project.title}</h2></Card.Title>
        <Card.Text style={{ fontSize: '1.5em' }}>{project.description}</Card.Text>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Button success>Ver en GitHub</Button>
        </a>
        <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
        <Button info>Visitar Sitio</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;