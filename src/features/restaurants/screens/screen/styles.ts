import styled from 'styled-components/native';

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
