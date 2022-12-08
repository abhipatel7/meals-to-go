import { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

import { FavoritesContext } from "../../services";

import { FavoriteButton } from "./styles";

export const Favorite = ({ restaurant }: any) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoriteButton onPress={() => (!isFavorite ? addToFavorites(restaurant) : removeFromFavorites(restaurant))}>
      <AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color={isFavorite ? "red" : "white"} />
    </FavoriteButton>
  );
};
