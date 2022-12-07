import React, { useContext } from 'react';
import { ActivityIndicator, Colors, Searchbar } from 'react-native-paper';

import { SafeArea, Spacer } from '../../../../components';
import { RestaurantContextType, RestaurantsContext } from '../../../../services';
import { Card as RestaurantCard } from '../../components';
import { SearchContainer, RestaurantList, LoadingContainer } from './styles';

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext) as RestaurantContextType;

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={Colors.blue300} size={50} />
        </LoadingContainer>
      ) : (
        <>
          <SearchContainer>
            <Searchbar />
          </SearchContainer>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <RestaurantCard restaurant={item} />
              </Spacer>
            )}
          />
        </>
      )}
    </SafeArea>
  );
};
