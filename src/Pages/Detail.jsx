import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCharStates } from '../Context/Context';

const Detail = () => {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { users } = useCharStates(); 

  const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };
  
  const user = users.find((user) => user.id === parseInt(id)); 

  useEffect(() => {
    if (user) {
      setChar(user);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user]);

  return (
    <div className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {loading ? 'Cargando...' : (
        <>
          <h1>Name: {char.name}</h1>
          <h3>Email: {char.email}</h3> 
          <h3>Website: {char.website}</h3> 
          
        </>
      )}
    </div>
  );
};

export default Detail;