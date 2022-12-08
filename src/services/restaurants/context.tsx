import { useEffect, useState, createContext, useContext } from "react";
import { LocationContext } from "../location";
import { restaurantsRequest, restaurantsTransform } from "./service";

export interface RestaurantContextType {
  restaurants: any[];
  isLoading: boolean;
  error: any;
}

interface Props {
  children: React.ReactNode;
}

export const RestaurantsContext = createContext<RestaurantContextType>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc: any) => {
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
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{children}</RestaurantsContext.Provider>;
};
