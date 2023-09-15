import React from 'react';
import { Link } from 'react-router-dom';
import { useCharStates } from '../Context/Context'; 

const Navbar = () => {
  const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };


  return (
    <div id='navbar'className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div><img src="./img/DH.ico" alt="Logo" /></div>
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/favs'>Favs</Link>
      <Link className='link' to='/contact'>Contact</Link>
      <button className='ctheme' onClick={toggleTheme}>Change theme</button>
      </div>
    
   
  );
};

export default Navbar;