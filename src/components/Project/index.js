import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './index.scss';

const projects = [
  {
    title: 'Etch-a-Sketch',
    description:
      'This code creates a web-based drawing app with a grid of cells. Users can change brush size, select colors, erase, and clear the grid. The initial brush size is 1.',
    codeLink: 'https://github.com/nikman21/etch-a-sketch',
    liveLink: 'https://nikman21.github.io/etch-a-sketch/',
  },
  {
    title: 'Library',
    description:
      'This code is for a web app that allows users to manage a library of books. It defines a Book object constructor and a function to add books to an array, and also has functions to display and edit the book list. The code uses event listeners to handle user input and update the book list accordingly.',
    codeLink: 'https://github.com/nikman21/My-Library',
    liveLink: 'https://nikman21.github.io/My-Library/',
  },
  {
    title: 'Landing Page for MMA Gym',
    description:
      'Simple Landing Page for MMA Gym.It is fully responsive and is built with HTML and CSS.',
    codeLink: 'https://github.com/nikman21/landing-page',
    liveLink: 'https://nikman21.github.io/landing-page/',
  },
  {
    title: 'Simple Signup Form',
    description:
      'Simple signup form for a sample. It is fully responsive and is built with HTML and CSS.',
    codeLink: 'https://github.com/nikman21/signup-form',
    liveLink:'https://nikman21.github.io/signup-form/',
  },
  {
    title: 'Connect 4',
    description:
      'Created using vanilla javascript. It is played in the console.  It demonstrates the use of arrays, loops, objects, and functions.',
    codeLink: "",
  },
  {
    title: 'Yahtzee',
    description:
      'Yahtzee game created using java. It demonstrates the use of aobject oriented programming.',
    codeLink: 'https://github.com/nikman21/yahtzee-game',
  },
];

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'R', 'O', 'J', 'E', 'C ', 'T', 'S']}
              idx={8}
            />
          </h1>
        </div>

          
          <Row xs={1} md={2} lg={3} className='project-cards'>
          {projects.map((project, index) => (
            <Col key={index}>
              <Card className='project-card'>
                <Card.Body>
                  <Card.Title className='title'>{project.title}</Card.Title>
                  <Card.Text className='description'>{project.description}</Card.Text>
                  <div className="buttons-container">
                    <Button
                      variant="primary"
                      href={project.codeLink}
                      target="_blank"
                      id='button'
                      rel="noopener noreferrer"   
                      className="code-button"
                    >
                    <FontAwesomeIcon icon={faCode} className="mr-1" />
                    Code
                    </Button>
                  {project.liveLink &&
                    <Button
                      variant="secondary"
                      href={project.liveLink}
                      target="_blank"
                      id='button'
                      rel="noopener noreferrer"
                      className="live-button"
                    >
                      Live View
                    </Button>
                  }
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>
    </div>
    <Loader type="pacman" loading={true} />
    </>
  );
};

export default Project;

