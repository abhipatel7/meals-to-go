import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  children: ReactNode;
}

interface FavoritesContext {
  favorites: any[];
  addToFavorites: (restaurant: any) => void;
  removeFromFavorites: (restaurant: any) => void;
}

export const FavoritesContext = createContext<FavoritesContext>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const saveFavorites = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const add = (restaurant: any) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant: any) => {
    const newFavorites = favorites.filter((r) => r.placeId !== restaurant.placeId);

    setFavorites(newFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return <FavoritesContext.Provider value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}>{children}</FavoritesContext.Provider>;
};
