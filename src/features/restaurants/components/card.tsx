import React from 'react';
import { Text, Image } from 'react-native';
import { Card as ReactNativePaperCard } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { Restaurant } from '../../../types';
import Star from '../../../../assets/icons/star';
import Open from '../../../../assets/icons/open';
import { Spacer } from '../../../components';

interface Props {
  restaurant?: Restaurant;
}

const Title = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => `
    font-family: ${fonts.heading};
    font-size: ${fontSizes.body};
    color: ${colors.ui.primary};
  `}
`;

const Info = styled.View`
  padding: ${({ theme: { space } }) => space[3]};
`;

const Address = styled.Text`
  ${({ theme: { fonts, fontSizes } }) => `
    font-family: ${fonts.body};
    font-size: ${fontSizes.caption};
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

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: ${({ theme: { space } }) => space[2]};
  padding-bottom: ${({ theme: { space } }) => space[2]};
`;

export const Card = ({
  restaurant: { name, icon, photos, address, openingHours, rating, isOpenNow, isClosedTemporarily } = {
    name: 'Some restaurant',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
    address: '100 some random street',
    openingHours: '',
    rating: 3.2,
    isOpenNow: true,
    isClosedTemporarily: true,
  },
}: Props) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml xml={Star} width={20} height={20} key={index} />
            ))}
          </Rating>
          {isClosedTemporarily && <Text style={{ color: 'red' }}>CLOSED TEMPORARILY</Text>}
          <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={Open} width={20} height={20} />}
          </Spacer>
          <Spacer position="left" size="large">
            <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
          </Spacer>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
