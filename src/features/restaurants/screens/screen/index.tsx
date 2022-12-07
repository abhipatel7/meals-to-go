import React from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeArea, Spacer } from '../../../../components';

import { Card as RestaurantCard } from '../../components';
import { SearchContainer, RestaurantList } from './styles';

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};
