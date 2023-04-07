import { useEffect, useState } from 'react'
import {
  faPython,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])  

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
        Hello! I'm Nik, a full-stack developer with a passion for building intelligent systems 
        that can transform the world. After completing my degree in Informatics from Arizona State
        University, I embarked on a journey to explore the limitless possibilities of the tech world. As 
        a result, I've become proficient in a wide range of technologies, from front-end frameworks 
        like React to back-end languages like Python and Java.
        </p>
        <p>
        But my interests extend beyond just coding. I'm also an avid self-improvement enthusiast, 
        constantly seeking ways to better myself and those around me. I've discovered that staying 
        fit and healthy is a key aspect of personal growth, so I often take time out to indulge in my 
        love of mixed martial arts. When I'm not coding or sweating it out on the mat, I can often be
        found tinkering with gadgets, trying out new software, or watching tech talks on YouTube.
        </p>
        <p>
        Overall, I'm a family-oriented guy who loves to challenge himself and push his limits. 
        Whether it's through developing cutting-edge software solutions, mastering a new martial
        arts technique, or exploring a new part of the world, I'm always on the lookout for 
        opportunities to learn and grow. If you're interested in working with me or just want to chat 
        about the latest tech trends, don't hesitate to reach out!                
        </p>
      </div>

      
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" loading={true}/>
    </>
  )
}

export default About