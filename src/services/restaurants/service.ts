import { mockImages, MockLocation, mocks } from './mock';
import camelize from 'camelize-ts';

export const restaurantsRequest = async (location: MockLocation = '37.7749295,-122.4194155') => {
  return await new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (mock === undefined) {
      reject('Not found');
    }

    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }: any) => {
  const mappedResults = results.map((restaurant: any) => {
    restaurant.photos = restaurant.photos.map((_: any) => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]);
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours?.open_now,
    };
  });

  return camelize(mappedResults) as any[];
};
