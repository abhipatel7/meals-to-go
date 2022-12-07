import camelize from 'camelize-ts';

import { LOCATION, locations } from './mock';

export const locationRequest = async (searchTerm: any) => {
  return await new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm as LOCATION];
    if (locationMock === undefined) {
      reject('not found');
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: any) => {
  const formattedResponse = camelize(result) as any;
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
