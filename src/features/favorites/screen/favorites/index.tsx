import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { SafeArea, Spacer, Text } from "../../../../components";
import { FavoritesContext } from "../../../../services";
import { Card as RestaurantInfoCard } from "../../../restaurants/components";
import { RestaurantList } from "../../../restaurants/screens/restaurant/styles";

import { NoFavoritesArea } from "./styles";

export const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
