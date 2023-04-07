import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Profile from '../../assets/images/profile.jpeg'
import Resume from '../../assets/images/N_resume.PDF'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faEnvelope,faUser,faFile, faClose, faBars, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleToggleDarkMode = () => {
        console.log('toggle clicked');
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
        setIsActive(!isActive);
    };

    
    const [showNav, setShowNav] = useState(false)
    

  

  return (
    <div className="nav-bar">
      <Link className="logo" to="/"  onClick={() => setShowNav(false)}>
        <img src={Profile} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/project"
          onClick={() => setShowNav(false)}
        
        >
          <FontAwesomeIcon icon={faCode}  />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope}  />
        </NavLink>
        <button className={`toggle-theme ${isActive ? 'active' : ''} ${
            isDarkMode ? 'dark-mode' : ''
          }`}  onClick={handleToggleDarkMode}>
          <BsFillMoonStarsFill />
        </button>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
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
        <li>
          <a target="_blank" rel="noreferrer" href={Resume}>
            <FontAwesomeIcon icon={faFile}  />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  );
};

export default Sidebar;
