import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight != null && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const SearchContainer = styled.View`
  padding: ${({ theme: { space } }) => space[3]};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  ${({ theme: { space, colors } }) => `    
    padding: ${space[3]};
    background-color: ${colors.bg.secondary}; ;
  `}
`;
