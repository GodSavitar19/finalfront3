import React, { useState } from 'react';
import CardContact from './CardContact';
import { useCharStates } from '../Context/Context';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);

    const isValidEmail = (value) => {
        // Expresión regular para validar correos electrónicos
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nombre.length >= 3 && nombre === nombre.trim() && isValidEmail(email)) {
            setShow(true);
            setError(false);
        } else {
            setShow(false);
            setError(true);
        }
    };
    const { tema, dispatch } = useCharStates(); 
    const toggleTheme = () => {
      dispatch({ type: 'TOGGLE_TEMA' });
    };

    return (
        <>
            <div className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                <form onSubmit={handleSubmit}>
                    <h2>Ingresa Tus Datos:</h2>
                    <label>Nombre:</label>
                    <input onChange={(event) => setNombre(event.target.value)} />
                    <br />
                    <label>Email:</label>
                    <input onChange={(event) => setEmail(event.target.value)} />
                    <br/><br/>
                    <button>Verificar</button>
                    <br /><br/>
                    <br /><br/>
                </form>
            </div>
            {error && <><h6>Vuelve A Intentarlo </h6></>}
            {show ? <CardContact nombre={nombre} email={email} /> : null}
        </>
    );
};

export default Form;