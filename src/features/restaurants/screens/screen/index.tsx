import React from 'react';
import { Searchbar } from 'react-native-paper';

import { Card as RestaurantCard } from '../../components';
import { SafeArea, SearchContainer, RestaurantListContainer } from './styles';

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
