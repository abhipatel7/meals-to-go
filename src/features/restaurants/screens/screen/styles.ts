import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight != null && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
