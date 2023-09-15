import React from 'react'
import Form from '../Components/Form';
import { useCharStates } from '../Context/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
  const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };
  
  return (
    <div className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`} >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Form/>
    </div>
  )
}

export default Contact