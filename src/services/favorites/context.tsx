import { createContext, ReactNode, useState } from "react";

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

  const add = (restaurant: any) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant: any) => {
    const newFavorites = favorites.filter((r) => r.placeId !== restaurant.placeId);

    setFavorites(newFavorites);
  };

  return <FavoritesContext.Provider value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}>{children}</FavoritesContext.Provider>;
};
