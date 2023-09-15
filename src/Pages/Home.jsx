import React from 'react';
import Card from '../Components/Card';
import { useCharStates } from '../Context/Context';

const Home = () => {
  const { users } = useCharStates();
  const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };

  return (
    <div className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`} ><div className='Home'>
      {users.map((user) => (
        <Card user={user} key={user.id} /> 
      ))}
    </div></div>
  );
};

export default Home;