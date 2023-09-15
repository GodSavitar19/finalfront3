import React from "react"
import { useCharStates } from '../Context/Context';

const CardContact = ({nombre, email}) => {

  const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };

    return (
      <div className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <div className='card'>
          <h3>Gracias {nombre} te contactaremos cuanto antes via Email </h3>
          
      </div></div>
    )

}

export default CardContact