import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { FavoritesBar, SafeArea, Spacer } from "../../../../components";
import { FavoritesContext, RestaurantsContext } from "../../../../services";
import { Card as RestaurantCard, Search } from "../../components";

import { Loading, LoadingContainer, RestaurantList } from "./styles";

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  const [isFavoritesToggled, setIsFavoritesToggled] = useState(false);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search isFavoritesToggled={isFavoritesToggled} onFavoritesToggle={() => setIsFavoritesToggled(!isFavoritesToggled)} />

      {isFavoritesToggled && <FavoritesBar onNavigate={navigation.navigate} favorites={favorites} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item: restaurant }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}>
              <Spacer position="bottom" size="large">
                <RestaurantCard restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(restaurant: any) => restaurant.name}
      />
    </SafeArea>
  );
};
