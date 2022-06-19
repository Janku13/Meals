import React, { useState, useEffect, createContext, useMemo } from 'react';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service.js';

export const RestaurantContext = createContext();
export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          console.log('deu certo', results);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log('deu erro', err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
