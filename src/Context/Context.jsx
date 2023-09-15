import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';

const CharStates = createContext();

const localFavs = JSON.parse(localStorage.getItem('favs'));
const initialFavState = localFavs ? localFavs : [];

const initialState = {
  users: [],
  favs: initialFavState,
  tema: 'light', // Inicializamos con tema claro ('light')
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'TOGGLE_FAV':
      const updatedFavs = { ...state.favs };
      if (updatedFavs[action.payload]) {
        delete updatedFavs[action.payload];
      } else {
        updatedFavs[action.payload] = true;
      }
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    case 'TOGGLE_TEMA':
      const newTema = state.tema === 'light' ? 'dark' : 'light'; // Cambia entre claro y oscuro
      return { ...state, tema: newTema };
    default:
      return state;
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: 'SET_USERS', payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CharStates.Provider value={{ ...state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};

export default Context;

export const useCharStates = () => useContext(CharStates);