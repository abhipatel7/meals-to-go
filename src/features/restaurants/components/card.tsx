import React from 'react';
import { Card as ReactNativePaperCard } from 'react-native-paper';
import { Restaurant } from '../../../types';
import styled from 'styled-components/native';

interface Props {
  restaurant?: Restaurant;
}

const Title = styled.Text`
  ${({ theme: { space, colors, fonts } }) => `
    font-family: ${fonts.body}
    padding: ${space[3]};
    color: ${colors.ui.primary};
  `}
`;

const RestaurantCard = styled(ReactNativePaperCard)`
  background-color: ${({ theme: { colors } }) => colors.bg.primary};
`;

const RestaurantCardCover = styled(ReactNativePaperCard.Cover)`
  ${({ theme: { space, colors } }) => `
    padding: ${space[3]};
    background-color: ${colors.bg.primary}; ;
  `}
`;

export const Card = ({
  restaurant: { name, icon, photos, address, openingHours, rating, isOpenNow, isClosedTemporarily } = {
    name: 'Some restaurant',
    icon: '',
    photos: ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
    address: '100 some random street',
    openingHours: '',
    rating: 2,
    isOpenNow: true,
    isClosedTemporarily: false,
  },
}: Props) => {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
