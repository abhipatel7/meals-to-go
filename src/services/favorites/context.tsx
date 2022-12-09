import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication";

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

  const { user } = useContext(AuthenticationContext);

  const saveFavorites = async (value: any, userId: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${userId}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavorites = async (userId: string) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${userId}`);
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
    if (user && (user as User).uid) {
      loadFavorites((user as User).uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && (user as User).uid && favorites.length) {
      saveFavorites(favorites, (user as User).uid);
    }
  }, [favorites, user]);

  return <FavoritesContext.Provider value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}>{children}</FavoritesContext.Provider>;
};
