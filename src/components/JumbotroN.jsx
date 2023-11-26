import React from 'react'
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';


export const JumbotroN = () => {
    return (
        <Jumbotron>
            <Display4>¡Hola! Soy MPG, un apasionado desarrollador web fullstack con 0 años de experiencia en la creación de soluciones digitales innovadoras.</Display4>
            <Lead>Mi enfoque va más allá del código. No solo construyo sitios web; creo experiencias digitales que impulsan el éxito de mis clientes. Desde la elegante interfaz de usuario hasta la robustez del back-end, mi objetivo es proporcionar soluciones que destaquen y resuelvan problemas.</Lead>
            <hr className="my-4" />
            <p>¿Listo para llevar tu presencia en línea al siguiente nivel? ¡Explora mi portafolio y descubre cómo puedo ayudarte! </p>
            <Button primary lg>Ver Portafolio</Button>
        </Jumbotron>)
}
