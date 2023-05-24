import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Profile from '../../assets/images/profile.jpeg'
import Resume from '../../assets/images/Nik_Resume.pdf'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = [" "," ",'N', 'i', 'k'];

    const startTimer = () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
            
        }, 3000);
    }

    useEffect(() => {
        startTimer();
        return () => clearTimeout(startTimer);
    }, []);

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <div className='img-div'>
                        <img src = {Profile} alt = 'logo' />
                    </div>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>e</span>
                        <span className={letterClass}>l</span>
                        <span className={`${letterClass} _12`}>l</span>
                        <span className={letterClass}>o,</span>
                        <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _12`}>'m</span>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={3}
                        />
                    </h1>
                    <h2>Web Developer</h2>
                    <div className='button-container'>
                        <Link to="/contact" className='flat-button'>Contact Me</Link>
                        <a target="_blank" rel="noreferrer" href={Resume} className='flat-button'>Resume</a>
                    </div>
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikolas-manuel-a86405237/">
                                <FontAwesomeIcon icon={faLinkedin}  />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://github.com/nikman21">
                                <FontAwesomeIcon icon={faGithub}  />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="pacman" loading={true}/>
        </>
    );
};

export default Home;

