import React from "react";
import { Image as RNImage } from "react-native";
import WebView from "react-native-webview";
import * as Device from "expo-device";
import { DefaultTheme, StyledComponent } from "styled-components";

import { Text } from "../../typography";

import { CompactImage, CompactWebview, Item } from "./styles";

const isAndroid = Device.osName === "Android";

export const CompactRestaurantInfo = ({ restaurant }: any) => {
  const Image: StyledComponent<typeof WebView | typeof RNImage, DefaultTheme> = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
