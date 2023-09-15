import React from 'react'
import { useCharStates } from '../Context/Context';
const Footer = () => {

  const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };
  return (
    <div id='footer' className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`} >
      <footer className='footer'>
        <p>Powered by</p>
        <img className="socialIcon" src="./img/ico-whatsapp.png" alt='DH-logo' />
        <img className="socialIcon" src="./img/ico-facebook.png" alt='DH-logo' />
        <img className="socialIcon" src="./img/ico-instagram.png" alt='DH-logo' />
        <img className="socialIcon" src="./img/ico-tiktok.png" alt='DH-logo' />
        <img  src="./img/DH.png" alt='DH-logo' />

    </footer>
    </div>
  )
}

export default Footer