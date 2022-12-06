import React from 'react';
import { SvgXml } from 'react-native-svg';

import { Restaurant } from '../../../../types';
import Star from '../../../../../assets/icons/star';
import Open from '../../../../../assets/icons/open';
import { Spacer, Text } from '../../../../components';
import { RestaurantCard, RestaurantCardCover, Info, Section, Rating, Icon, Address } from './styles';

interface Props {
  restaurant?: Restaurant;
}

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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml xml={Star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <Spacer>
            {isClosedTemporarily && (
              <Text variant="error" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
          </Spacer>
          <Spacer>{isOpenNow && <SvgXml xml={Open} width={20} height={20} />}</Spacer>
          <Spacer>
            <Icon source={{ uri: icon }} />
          </Spacer>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
