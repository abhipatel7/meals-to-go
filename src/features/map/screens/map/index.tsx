import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Callout, Marker } from "react-native-maps";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { LocationContext, RestaurantsContext } from "../../../../services";
import { MapCallout, Search } from "../../components";

import { Map } from "./styles";

export const MapScreen = () => {
  const {
    location: { viewport, lat, lng },
  } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [latitudeDelta, setLatitudeDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatitudeDelta(northeastLat - southwestLat);
  }, [viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant: any) => (
          <Marker key={restaurant.name} coordinate={{ latitude: restaurant.geometry.location.lat, longitude: restaurant.geometry.location.lng }}>
            <Callout onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}>
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </>
  );
};
