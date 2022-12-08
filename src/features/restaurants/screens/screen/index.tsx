import { useContext } from "react";
import { Colors } from "react-native-paper";

import { SafeArea, Spacer } from "../../../../components";
import { RestaurantsContext } from "../../../../services";
import { Card as RestaurantCard, Search } from "../../components";

import { Loading, LoadingContainer, RestaurantList } from "./styles";

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

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
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
