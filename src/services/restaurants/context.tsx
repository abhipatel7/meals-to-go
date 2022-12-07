import { useEffect, useState, createContext } from 'react';
import { restaurantsRequest, restaurantsTransform } from './service';

export interface RestaurantContextType {
  restaurants: any[];
  isLoading: boolean;
  error: any;
}

interface Props {
  children: React.ReactNode;
}

export const RestaurantsContext = createContext<RestaurantContextType | null>(null);

export const RestaurantsContextProvider = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((restaurants) => setRestaurants(restaurants))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }, 1000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{children}</RestaurantsContext.Provider>;
};
