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
    language: 'Javascript HTML CSS'
  },
  {
    title: 'Library',
    description:
      'This code is for a web app that allows users to manage a library of books. It defines a Book object constructor and a function to add books to an array, and also has functions to display and edit the book list. The code uses event listeners to handle user input and update the book list accordingly.',
    codeLink: 'https://github.com/nikman21/My-Library',
    liveLink: 'https://nikman21.github.io/My-Library/',
    language: 'Javascript HTML CSS'
  },
  {
    title: 'Landing Page',
    description:
      'Simple Landing Page for MMA Gym.It is fully responsive and is built with HTML and CSS, Bootstrap, Jquery, and Javascript',
    codeLink: 'https://github.com/nikman21/landing-page',
    liveLink: 'https://nikman21.github.io/landing-page/',
    language: 'Javascript HTML CSS Bootstrap Jquery'
  },
  {
    title: 'Signup Form',
    description:
      'Simple signup form for a sample. It is fully responsive and is built with HTML and CSS.',
    codeLink: 'https://github.com/nikman21/signup-form',
    liveLink:'https://nikman21.github.io/signup-form/',
    language: 'Javascript HTML CSS'
  },
  {
    title: 'Sandwhich shop',
    description: 'Java program that demostrates the decorator pattern, factory pattern and OOP. I prompts user to create their order and then outputs a receipt ',
    codeLink: "https://github.com/nikman21/Sandwich-Shop",
    language: 'Java'
    
  },
  {
    title: 'Yahtzee',
    description:
      'Yahtzee game created using Java. It demonstrates the use of object oriented programming.',
    codeLink: 'https://github.com/nikman21/yahtzee-game',
    language: 'Java'
  },
  {
    title: 'Gradebook',
    description:
      'A simple multi-table database & application that keeps track of students and their grades.  The database contains a Students table and an Assignments Table.  The students have a one-to-many relationship with assignments.',
    codeLink: 'https://github.com/nikman21/student-gradebook',
    language: 'Java'
  },
  
  {
    title: 'Guessing Game',
    description:
      'Simple number guessing game. The server will maintain the a “number guessing game” that clients will connect to. The server will pick a number and client will send guesses in. When a client guesses, the server will give them feedback.',
    codeLink: 'https://github.com/nikman21/number-guessing-game',
    language: 'Java Networking'
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
                  <Card.Text className='language'> {project.language}</Card.Text>
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

