import camelize from "camelize-ts";

import { mockImages, MockLocation, mocks } from "./mock";

export const restaurantsRequest = async (location: MockLocation) => {
  return await new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }: any) => {
  const mappedResults = results.map((restaurant: any) => {
    restaurant.photos = restaurant.photos.map((_: any) => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]);
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours?.open_now,
    };
  });

  return camelize(mappedResults) as any[];
};
