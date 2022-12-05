import { Text } from 'react-native';
import { Restaurant } from '../../../types';

interface Props {
  restaurant: Restaurant;
}

export const RestaurantsInfo = ({
  restaurant: { name, icon, photos, address, openingHours, rating, isOpenNow, isClosedTemporarily } = {
    name: 'Test',
    icon: '',
    photos: [''],
    address: '',
    openingHours: '',
    rating: 2,
    isOpenNow: true,
    isClosedTemporarily: false,
  },
}: Props) => {
  return <Text>RestaurantsInfo</Text>;
};
