import React from 'react';
import { Link } from 'react-router-dom';
import { useCharStates } from '../Context/Context';

const Card = ({ user, showAddToFavoritesButton = true }) => {
  const { favs, dispatch } = useCharStates();

  const addFav = () => {
    dispatch({ type: 'TOGGLE_FAV', payload: user.id });
    localStorage.setItem('favs', JSON.stringify({ ...favs, [user.id]: true }));
  };

  const isFavorite = favs[user.id];

  return (
    <div className='card'>
      <Link to={`/detail/${user.id}`}>
        <h3>{user.name}</h3>
        <img className='docImg' src="./img/doctor.jpg" alt="" />
        <h4>{user.company && user.company.name}</h4>
      </Link>
      {showAddToFavoritesButton && (
        <button className='favButton'onClick={addFav}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} ⭐
        </button>
      )}
      <br></br>
    </div>
    
  );
};

export default Card;