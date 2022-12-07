import React, { useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { SafeArea, Spacer } from '../../../../components';
import { RestaurantsContext } from '../../../../services';
import { Card as RestaurantCard, Search } from '../../components';
import { RestaurantList, LoadingContainer } from './styles';

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={Colors.blue300} size={50} />
        </LoadingContainer>
      ) : (
        <>
          <Search />
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
