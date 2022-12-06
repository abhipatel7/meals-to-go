import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Card as RestaurantCard } from '../components';
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight != null && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${({ theme: { space } }) => space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  ${({ theme: { space, colors } }) => `    
    padding: ${space[3]};
    background-color: ${colors.bg.secondary}; ;
  `}
`;

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
