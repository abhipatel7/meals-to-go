import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { SafeArea, Spacer } from "../../../../components";
import { RestaurantsContext } from "../../../../services";
import { Card as RestaurantCard, Search } from "../../components";

import { Loading, LoadingContainer, RestaurantList } from "./styles";

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
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
