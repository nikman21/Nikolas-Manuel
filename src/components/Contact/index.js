import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])  

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_qyeotr7', 'template_w39ylxl', form.current, 'KUykQjFBuIzGEHVLz')
        .then(
            () => {
            alert('Message successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )
    }



  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', " ", "m","e"]} 
                    inx={15}
                    />
                </h1>
                <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me!   
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='text' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className="flat-button" value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

       <div className="info-map">
          Nikolas Manuel,<br/>
          <br />
          Queen Creek, AZ <br />

          United States of America <br />
          <br />
          <span>Nikolas.manuel13@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[33.2487, -111.6342]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.2487, -111.6342]}>
                <Popup>You are here in Queen Creek, Arizona</Popup>
            </Marker>
        </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
