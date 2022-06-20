import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from 'react';
import { LocationContext } from '../location/location.context.js';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service.js';

export const RestaurantContext = createContext();
export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);

          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const formattedLocation = `${location.lat},${location.lng}`;
      retrieveRestaurants(formattedLocation);
    }
  }, [location]);
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
