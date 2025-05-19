import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    const exists = favorites.find(fav => fav.image === item.image);
    if (exists) {
      setFavorites(favorites.filter(fav => fav.image !== item.image));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const isFavorited = (item) => {
    return favorites.some(fav => fav.image === item.image);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
