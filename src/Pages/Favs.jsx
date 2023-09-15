import React from 'react';
import Card from '../Components/Card';
import { useCharStates } from '../Context/Context';

const Favs = () => {
  const { favs, users } = useCharStates();
  const { tema, dispatch } = useCharStates(); 
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_TEMA' });
  };

  return (
    <div className={`navbar ${tema === 'dark' ? 'dark-theme' : 'light-theme'}`} >
      <div className='Home'>
      {Object.keys(favs).map((userId) => {
        const favUser = users.find((user) => user.id === parseInt(userId));
        if (favUser) {
          return <Card user={favUser} key={favUser.id} showAddToFavoritesButton={false} />;
        }
        return null;
      })}
    </div> </div>
  );
};

export default Favs;