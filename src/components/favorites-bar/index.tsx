import { ScrollView, TouchableOpacity } from "react-native";

import { CompactRestaurantInfo } from "../restaurant";
import { Spacer } from "../spacer";
import { Text } from "../typography";

import { FavoritesWrapper } from "./styles";

export const FavoritesBar = ({ favorites, onNavigate }: any) => {
  if (!favorites.length) {
    return null;
  }

  return (
    <FavoritesWrapper>
      <Spacer position="left" size="medium">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant: any) => (
          <Spacer position="left" size="medium" key={restaurant.name}>
            <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", { restaurant })}>
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavoritesWrapper>
  );
};
